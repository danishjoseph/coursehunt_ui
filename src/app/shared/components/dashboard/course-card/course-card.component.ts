import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() courseInput: any;
  @Output() onCardUpdate = new EventEmitter<any>();

  ratingStars:any = 4
  isCourseFav=false;
  constructor(
    private dashApiService: DashboardService
  ) { }

  ngOnInit(): void {
  }
  toggleFav(courseId: any){
    this.isCourseFav = !this.isCourseFav
    const formData = new FormData();

    formData.append("courseId", courseId );

    this.dashApiService.upvoteCourse(formData).subscribe(res=>{
      this.onCardUpdate.emit()
    })
  }

  addToFav(courseId: any){
    this.isCourseFav = !this.isCourseFav
    const formData = new FormData();

    formData.append("courseId", courseId );

    this.dashApiService.addToFavCourse(formData).subscribe(res=>{
      this.onCardUpdate.emit()
    })
  }

}
