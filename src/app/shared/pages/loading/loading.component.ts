import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
stateToCarry: any
routerToCarry: any
  constructor(
    private router: Router
  ) {
    this.stateToCarry = this.router.getCurrentNavigation()?.extras.state;
    this.routerToCarry = this.router.getCurrentNavigation()?.extras.state?.pointer;
   }

  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate([this.routerToCarry], {state:this.stateToCarry})
    },2000)
  }

}
