import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router

  ) { 
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (true) {
      const formData = new FormData();
      try {
        formData.append('username', this.loginForm.get('username').value);
        formData.append('password', this.loginForm.get('password').value);

        this.loginService.authenticate(formData).subscribe((res: any) => {
          localStorage.setItem('token',res.token)
          localStorage.setItem('user',JSON.stringify(res.user))
          this.loginService.isUserLogedIn = true
          this.loginService.notifyLogin()
          this.router.navigate([''])
        });
        
      } catch (error) {
        console.error(error)
        
      }
    } else {
      // this.showMessage('error', 'Service Message', 'Please add valid Image');
    }
  }

}
