import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterService } from 'src/app/shared/services/dashboard/filter.service';

@Component({
  selector: 'app-dashboard-pg',
  templateUrl: './dashboard-pg.component.html',
  styleUrls: ['./dashboard-pg.component.scss']
})
export class DashboardPgComponent implements OnInit {
appliedFilter:any
  categoryId: any;
  platformId: any;
  platformName: any;
  categoryName: any;
  constructor(
    private router: Router,
    private filterService:FilterService
  ) { 
    this.categoryId = this.router.getCurrentNavigation()?.extras.state?.categoryId;    
    this.platformId = this.router.getCurrentNavigation()?.extras.state?.platformId;    
    this.platformName = this.router.getCurrentNavigation()?.extras.state?.platformName;    
    this.categoryName = this.router.getCurrentNavigation()?.extras.state?.categoryName;    
  }

  ngOnInit(): void {
    if(this.categoryId != undefined){
      this.filterService.categoryId = this.categoryId
      this.filterService.categoryName = this.categoryName
    }
    else{
      this.filterService.categoryId = 'null'
      this.filterService.categoryName = null
    }
    if(this.platformId != undefined){
      this.filterService.platformId = this.platformId
      this.filterService.platformName = this.platformName
    }
    else{
      this.filterService.platformId = 'null'
      this.filterService.platformName = null

    }
  }

  applyFilter(event:any){
this.appliedFilter = event    
  }

}
