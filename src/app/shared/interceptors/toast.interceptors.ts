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
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private injector: Injector,
    private router: Router
    ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const Message = this.injector.get(MessageService);

    return next.handle(request).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          if (evt.body){
              if(evt.body.toast){
                Message.add(evt.body.toast);
              }
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 500) {
          Message.add({ severity: 'error', detail: 'Internal Server Error' });
          console.error('piped interceptor error', error);
        }
        if (error.status === 401) {
          Message.add({ severity: 'error', detail: 'Session expired' });
          this.router.navigate(['login']);
        }
        if (error.status === 403) {
          Message.add({ severity: 'error', detail: 'Unauthorized access' });
          this.router.navigate(['403']);
        }
        if (error.status === 409) {
          Message.add({ severity: 'error', detail: 'User already exists' });
          this.router.navigate(['signup']);
        }
        return throwError(error);
      })
    );
  }
}
