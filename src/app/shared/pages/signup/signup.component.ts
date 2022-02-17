import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router

  ) { 
    this.signupForm = this.formBuilder.group({
      username: '',
      password: '',
      fullname: ''                                              //
      // role:''
      // createdAt:new Date(),
      // updateAt:String,
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (true) {
      const formData = new FormData();
      try {
        formData.append('username', this.signupForm.get('username').value);
        formData.append('password', this.signupForm.get('password').value);
        formData.append('fullname', this.signupForm.get('fullname').value);

        this.loginService.register(formData).subscribe((res: any) => {
          localStorage.setItem('token',res.token)
          this.loginService.isUserLogedIn = true
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
