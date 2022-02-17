import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { ApiConstantsService } from '../../services/editor/api-constants.service';

@Component({
  selector: 'app-landing-top-trending',
  templateUrl: './landing-top-trending.component.html',
  styleUrls: ['./landing-top-trending.component.scss']
})
export class LandingTopTrendingComponent implements OnInit {
  products: any[]=[{},{},{},{},{},{},{},{},{},{}];
	
	responsiveOptions: any;
  constructor(
    private dashboardApiService: DashboardService,
    private constantService: ApiConstantsService
  ) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
   }

  ngOnInit(): void {
    this.initView();
  }
  initView() {
    this.dashboardApiService.getCategories().subscribe((res:any)=>{
      this.products = res.data
      this.products.map((element:any)=>{
        element.imgSrc = this.constantService.IMG_URL+element.destination+element.cover;
      })
    })
  }

}
