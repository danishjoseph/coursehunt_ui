import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiConstantsService {
  URL = 'https://coursing-be.herokuapp.com';
  port = '/';
  endpoint = 'api/';
  SERVER = this.URL + this.port + this.endpoint;
  IMG_URL = this.URL + this.port;
  EDITOR_API = {
    ADD_PLATFORM: this.SERVER + 'editor/addPlatform',
    ADD_CATEGORY: this.SERVER + 'editor/addCategory',
    ADD_COURSE: this.SERVER + 'editor/addCourse',
    ADD_BLOG: this.SERVER + 'editor/addBlog',
    GET_PLATFORMS: this.SERVER + 'editor/getPlatforms',
    UPDATE_PLATFORMS: this.SERVER + 'editor/updatePlatform',
    UPDATE_CATEGORY: this.SERVER + 'editor/updateCategory',
    UPDATE_COURSE: this.SERVER + 'editor/updateCourse',
    UPDATE_USER: this.SERVER + 'editor/updateUser',
    UPDATE_BLOG: this.SERVER + 'editor/updateBlog',
    ACTIVATE_COURSE: this.SERVER + 'editor/activateCourse',
    DEACTIVATE_COURSE: this.SERVER + 'editor/deactivateCourse',
    DELETE_PLATFORMS: this.SERVER + 'editor/deletePlatform',
    DELETE_BLOG: this.SERVER + 'editor/deleteBlog',
    DELETE_CATEGORY: this.SERVER + 'editor/deleteCategory',
    GET_PLATFORMSTABLE: this.SERVER + 'editor/getPlatformsTableData',
    GET_CATEGORYTABLE: this.SERVER + 'editor/getCategoryTableData',
    GET_USERTABLE: this.SERVER + 'editor/getUsersTableData',
    GET_COURSETABLE: this.SERVER + 'editor/getCourseTableData',
    GET_BLOGTABLE: this.SERVER + 'editor/getBlogsTableData',
    GET_CATEGORIES: this.SERVER + 'editor/getCategories',
    GET_MASTERS: this.SERVER + 'editor/getMasters',
    GET_MENU: this.SERVER + 'editor/getMenu',
  };
  DASHBOARD_API = {
    GET_PLATFORMS: this.SERVER + 'dashboard/platforms',
    GET_CATEGORIES: this.SERVER + 'dashboard/categories',
    GET_INTERESTS: this.SERVER + 'dashboard/interests',
    GET_FILTERS: this.SERVER + 'dashboard/getFilters',
    GET_COURSES: this.SERVER + 'dashboard/courses',
    GET_FAVCOURSES: this.SERVER + 'dashboard/favCourses',
    GET_BLOGS: this.SERVER + 'dashboard/blogs',
    GET_MENUBAR: this.SERVER + 'dashboard/menubar',
    UPVOTE: this.SERVER + 'dashboard/upvote',
    ADDFAV: this.SERVER + 'dashboard/addToFav',
  };
  LOGIN_API = {
    POST_LOGIN: this.SERVER + 'login/authenticate',
    POST_REGISTER: this.SERVER + 'login/register',
  };
  constructor() {}
}
