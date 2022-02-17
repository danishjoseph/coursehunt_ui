import { Component, Input, OnInit } from '@angular/core';
import { EditorService } from 'src/app/shared/services/editor/editor.service';

@Component({
  selector: 'app-course-tabview',
  templateUrl: './course-tabview.component.html',
  styleUrls: ['./course-tabview.component.scss']
})
export class CourseTabviewComponent implements OnInit {
courseTypes:any;
selectedCourseType:any;
selectedCourseQuery:any;
countIndex= [5]
@Input() appliedFiltersInput: any;

  constructor(
    private apiService: EditorService
  ) { }

  ngOnInit(): void {
    this.apiService.getMasters('type').subscribe((res: any)=>{
      this.courseTypes = res.data;
      this.selectedCourseType = this.courseTypes[0];
    })
  }

  handleTabChange(event: any){
    this.selectedCourseType = this.courseTypes[event.index]; 
  }

  search(event:any){
    this.selectedCourseQuery = event.target.value    
  }

  setCount(index: number, count: number){
    this.countIndex[index] = count    
  }

}
