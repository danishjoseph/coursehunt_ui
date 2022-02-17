import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPgComponent } from './shared/pages/dashboard/dashboard-pg/dashboard-pg.component';
import { BlogEditorComponent } from './shared/pages/editor/blog-editor/blog-editor.component';
import { CategoryEditorComponent } from './shared/pages/editor/category-editor/category-editor.component';
import { CourseEditorComponent } from './shared/pages/editor/course-editor/course-editor.component';
import { CourseRequestsComponent } from './shared/pages/editor/course-requests/course-requests.component';
import { FavEditorComponent } from './shared/pages/editor/fav-editor/fav-editor.component';
import { PlatformEditorComponent } from './shared/pages/editor/platform-editor/platform-editor.component';
import { UserEditorComponent } from './shared/pages/editor/user-editor/user-editor.component';
import { ErrorsComponent } from './shared/pages/errors/errors.component';
import { FlexMasterComponent } from './shared/pages/flex-master/flex-master.component';
import { LandingComponent } from './shared/pages/landing/landing/landing.component';
import { LoadingComponent } from './shared/pages/loading/loading.component';
import { LoginComponent } from './shared/pages/login/login/login.component';
import { SignupComponent } from './shared/pages/signup/signup.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'403',component:ErrorsComponent},
  {path:'loading',component:LoadingComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:DashboardPgComponent},
  {path:'categories',component:FlexMasterComponent},
  {path:'platforms',component:FlexMasterComponent},
  {path:'editor/platform',component:PlatformEditorComponent},
  {path:'editor/category',component:CategoryEditorComponent},
  {path:'editor/course',component:CourseEditorComponent},
  {path:'editor/users',component:UserEditorComponent},
  {path:'editor/blogs',component:BlogEditorComponent},
  {path:'editor/favs',component:FavEditorComponent},
  {path:'editor/course/requests',component:CourseRequestsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
