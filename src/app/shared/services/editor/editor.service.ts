import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiConstantsService } from './api-constants.service';
@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(
    private httpClient: HttpClient,
    private constantService: ApiConstantsService
    ) { }

  addPlatform(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.ADD_PLATFORM,formData);
  }

  addBlog(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.ADD_BLOG,formData);
  }

  updatePlatform(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.UPDATE_PLATFORMS,formData);
  }

  updateBlog(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.UPDATE_BLOG,formData);
  }

  updateCategory(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.UPDATE_CATEGORY,formData);
  }

  updateCourse(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.UPDATE_COURSE,formData);
  }

  updateUser(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.UPDATE_USER,formData);
  }

  activateCourse(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.ACTIVATE_COURSE,formData);
  }

  deactivateCourse(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.DEACTIVATE_COURSE,formData);
  }

  deletePlatform(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.DELETE_PLATFORMS,formData);
  }

  deleteBlog(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.DELETE_BLOG,formData);
  }

  deleteCategory(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.DELETE_CATEGORY,formData);
  }

  getPlatforms(){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_PLATFORMS);
  }

  getPlatformsTable(){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_PLATFORMSTABLE);
  }

  getBlogsTable(){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_BLOGTABLE);
  }

  getUsersTable(){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_USERTABLE);
  }

  getCategoryTable(){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_CATEGORYTABLE);
  }

  getCourseTable(){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_COURSETABLE);
  }

  getCourseRequestTable(){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_COURSETABLE+"?request=true");
  }

  getMenus(){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_MENU);
  }

  addCourse(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.ADD_COURSE,formData);
  }

  getCategories(){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_CATEGORIES);
  }

  getMasters(type: string){
    return this.httpClient.get(this.constantService.EDITOR_API.GET_MASTERS+"?type="+type);
  }
  addCategory(formData: any){
    return this.httpClient.post(this.constantService.EDITOR_API.ADD_CATEGORY,formData);
  }
}
