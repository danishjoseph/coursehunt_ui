import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard/dashboard.service';
import { ApiConstantsService } from '../../services/editor/api-constants.service';

@Component({
  selector: 'app-landing-platforms',
  templateUrl: './landing-platforms.component.html',
  styleUrls: ['./landing-platforms.component.scss']
})
export class LandingPlatformsComponent implements OnInit {
platformList = [
  {},
  {},
  {},
  {}
]
  constructor(
    private dashboardApiService: DashboardService,
    private constantService: ApiConstantsService
  ) { }

  ngOnInit(): void {
    this.initView();
  }
  
  initView() {
    this.dashboardApiService.getPlatforms().subscribe((res:any)=>{
      this.platformList = res.data
      this.platformList.map((element:any)=>{
        element.imgSrc = this.constantService.IMG_URL+element.destination+element.cover;
      })
    })
  }
}

