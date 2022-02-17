import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiConstantsService } from './editor/api-constants.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
isUserLogedIn = false;
authSubject = new BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient,
    private constantService: ApiConstantsService,
    private router: Router
  ) {
    if(localStorage.getItem('token') != null){
      this.notifyLogin()
    }
   }
  
  authenticate(formData: any){
    return this.httpClient.post(this.constantService.LOGIN_API.POST_LOGIN,formData);
  }
  
  register(formData: any){
    return this.httpClient.post(this.constantService.LOGIN_API.POST_REGISTER,formData);
  }

  notifyLogin(){
    this.authSubject.next(true);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isUserLogedIn = false;
    this.authSubject.next(false)
    this.router.navigate(['/','login']);
  }
}
