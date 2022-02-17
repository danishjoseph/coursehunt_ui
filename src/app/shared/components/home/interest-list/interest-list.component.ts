import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';
import { ApiConstantsService } from 'src/app/shared/services/editor/api-constants.service';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.scss']
})
export class InterestListComponent implements OnInit {
@Input() interestCategoryId: any;

interestList = []
  constructor(
    private ApiService: DashboardService,
    private constantService: ApiConstantsService
  ) { }

  ngOnInit(): void {
    this.fetchInterests()
  }

  fetchInterests(){
    const formData = new FormData();
    
    formData.append('_id', this.interestCategoryId);
    
    this.ApiService.getInterests(formData).subscribe((res:any)=>{
      let interestList = res.data
      interestList.map((element:any)=>{
        element.imgSrc = this.constantService.IMG_URL+element.destination+element.cover;
      })

      this.interestList = interestList
    })
  }

}
