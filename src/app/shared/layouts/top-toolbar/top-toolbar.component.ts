import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
rightMenu: any;
isLoggedIn: any;
loggedUser: any;
  constructor(
    private authService: LoginService,
    private router: Router
  ) { 
    authService.authSubject.subscribe(_value=>{
      if(_value){
        this.renderRightMenu()
      }
      this.isLoggedIn = _value;
    })
  }

  ngOnInit(): void {
  this.rightMenu =  [{
      label: 'Settings',
      icon: 'pi pi-cog',
      command: () => {
          this.router.navigate(['editor/course'])
      }
  },
  {
      label: 'Logout',
      icon: 'pi pi-power-off',
      command: () => {
        this.authService.logout()
      }
  }]
  }

  renderRightMenu(){
    let stringSub = localStorage.getItem('user');
    if(stringSub != null){
        this.loggedUser = JSON.parse(stringSub);
      }
      console.log(this.loggedUser)
  }

}
