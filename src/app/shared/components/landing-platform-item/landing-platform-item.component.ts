import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-landing-platform-item',
  templateUrl: './landing-platform-item.component.html',
  styleUrls: ['./landing-platform-item.component.scss']
})
export class LandingPlatformItemComponent implements OnInit {
@Input() itemObject: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToHome(item: any){
    
    const navExtras: NavigationExtras ={
      state:{
        platformId:item._id?item._id:item.id,
        platformName:item.name
      }
    }
    if(item){
      this.router.navigate(['home'], navExtras)
    }

  }

}
