import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstantsService } from '../editor/api-constants.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private httpClient: HttpClient,
    private constantService: ApiConstantsService
  ) { }
  
  getPlatforms(){
    return this.httpClient.get(this.constantService.DASHBOARD_API.GET_PLATFORMS);
  }

  getMenubar(){
    return this.httpClient.get(this.constantService.DASHBOARD_API.GET_MENUBAR);
  }

  getBlogs(formData: any){
    return this.httpClient.post(this.constantService.DASHBOARD_API.GET_BLOGS, formData);
  }

  getCategories(){
    return this.httpClient.get(this.constantService.DASHBOARD_API.GET_CATEGORIES);
  }

  getCourses(formData: any){
    return this.httpClient.post(this.constantService.DASHBOARD_API.GET_COURSES, formData);
  }

  getFavCourses(formData: any){
    return this.httpClient.post(this.constantService.DASHBOARD_API.GET_FAVCOURSES, formData);
  }

  getInterests(formData: any){
    return this.httpClient.post(this.constantService.DASHBOARD_API.GET_INTERESTS, formData);
  }

  getFilters(){
    return this.httpClient.get(this.constantService.DASHBOARD_API.GET_FILTERS);
  }

  upvoteCourse(formData: any){
    return this.httpClient.post(this.constantService.DASHBOARD_API.UPVOTE, formData);
  }

  addToFavCourse(formData: any){
    return this.httpClient.post(this.constantService.DASHBOARD_API.ADDFAV, formData);
  }
}
