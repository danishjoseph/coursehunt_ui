import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-top-trending-item',
  templateUrl: './top-trending-item.component.html',
  styleUrls: ['./top-trending-item.component.scss']
})
export class TopTrendingItemComponent implements OnInit {
  @Input() itemObject: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToHome(item: any){
    const navExtras: NavigationExtras ={
      state:{
        categoryId:item._id? item._id : item.id,
        categoryName:item.name,
        pointer:'home'
      }
    }
    if(item){
      this.router.navigate(['loading'], navExtras)
    }

  }

}
