import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';

@Component({
  selector: 'app-fav-editor',
  templateUrl: './fav-editor.component.html',
  styleUrls: ['./fav-editor.component.scss']
})
export class FavEditorComponent implements OnInit {
  courseList:any;
  constructor(
    private apiService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses(){
    let formData = new FormData();
    this.apiService.getFavCourses(formData).subscribe((response: any)=>{
      this.courseList = response.data;
    })
  }

}
