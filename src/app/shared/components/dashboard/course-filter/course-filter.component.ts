import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';
import { FilterService } from 'src/app/shared/services/dashboard/filter.service';

@Component({
  selector: 'app-course-filter',
  templateUrl: './course-filter.component.html',
  styleUrls: ['./course-filter.component.scss']
})
export class CourseFilterComponent implements OnInit {
filterApplication:any = {};

levelFilters: any;
selectedLevel=[];

certFilters: any;
selectedCerts=[];

priceFilters: any;
selectedPrices=[];

trendFilters: any;
selectedTrends=[];

@Output() onApplyFilter = new EventEmitter<any>();

  constructor(
    private dashboardService: DashboardService,
    private fitlerService: FilterService
  ) { }

  ngOnInit(): void {
    this.fitlerService.appliedFilters.subscribe(filters => this.filterApplication = filters)

    this.initFilters();
  }
  initFilters(){
    this.dashboardService.getFilters().subscribe((response: any)=>{
      this.levelFilters= response.data.levels
      this.certFilters= response.data.certs
      this.priceFilters= response.data.price
      this.trendFilters= response.data.trend
    })
  }

  applyFilters(){
    if(this.selectedLevel.length > 0){
      this.filterApplication.levels = this.selectedLevel.join(','); 
    }

    if(this.selectedCerts.length > 0){
      this.filterApplication.certs = this.selectedCerts.join(','); 
    }

    if(this.selectedPrices.length > 0){
      this.filterApplication.prices = this.selectedPrices.join(','); 
    }

    if(this.selectedTrends.length > 0){
      this.filterApplication.trends = this.selectedTrends.join(','); 
    }

    this.onApplyFilter.emit(this.filterApplication)
    
    this.fitlerService.setFilters(this.filterApplication)

  }

}
