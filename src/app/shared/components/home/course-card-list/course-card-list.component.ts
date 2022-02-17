import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';
import { FilterService } from 'src/app/shared/services/dashboard/filter.service';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss'],
})
export class CourseCardListComponent implements OnInit {
  @Input() courseTypeInput: any;
  @Input() courseQueryInput: any;
  @Output() onCourseLoad = new EventEmitter<any>();
  appliedFiltersInput: any;
  platformName:any
  categoryName:any

  
  courseList: any;
  constructor(
    private apiService: DashboardService,
    private filterService: FilterService,
    private router: Router
  ) {
    this.filterService.appliedFilters.subscribe(filters => this.appliedFiltersInput = filters);

  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.courseQueryInput){
      this.courseQueryInput = changes.courseQueryInput.currentValue;
      this.getCourses();
    }
  }

  ngOnInit(): void {
    
    this.filterService.appliedFilters.subscribe(filters =>{
      this.applyFilters()
      this.appliedFiltersInput = filters
    } 
    );
    this.platformName = this.filterService.platformName
    this.categoryName = this.filterService.categoryName
    this.getCourses();
  }

  getCourses(){
    const formData = new FormData();
    formData.append('courseType', this.courseTypeInput.id);
    formData.append('courseCategory', this.filterService.categoryId);
    formData.append('coursePlatform', this.filterService.platformId);
    if(this.courseQueryInput != undefined && this.courseQueryInput != null && this.courseQueryInput != ''){
      formData.append('courseQuery', this.courseQueryInput);
    }
    if(Object.keys(this.appliedFiltersInput).length !== 0){
      // if(this.appliedFiltersInput)
      
      formData.append('courseFilters',  JSON.stringify(this.appliedFiltersInput));
    }
    
    this.apiService.getCourses(formData).subscribe((response: any)=>{
      this.courseList = response.data;
      if(this.courseList == undefined ){
        this.onCourseLoad.emit(0)
      }
      else{
        this.onCourseLoad.emit(this.courseList.length)
      }
    })
  }
  
  applyFilters(){ 

    this.getCourses();
  }

}
