import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector,
    private router: Router
    ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if(!request.url.includes('authenticate')){
        const userToken = localStorage.getItem('token');
        if(userToken != null || userToken != undefined){
            const modifiedReq = request.clone({ 
                headers: request.headers.set('Authorization', `Bearer ${userToken}`).set('route',this.router.routerState.snapshot.url.toString()),
            });
            return next.handle(modifiedReq);
        }
        return next.handle(request);
    }
    else{
        return next.handle(request);
    }
  }
}