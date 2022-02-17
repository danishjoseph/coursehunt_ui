import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { TopMenuComponent } from './layouts/top-menu/top-menu.component';
import { DashboardPgComponent } from './pages/dashboard/dashboard-pg/dashboard-pg.component';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './components/dashboard/course-card/course-card.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFilterComponent } from './components/dashboard/course-filter/course-filter.component';
import { DashboardBannerComponent } from './components/dashboard/dashboard-banner/dashboard-banner.component';
import { ToolbarModule } from 'primeng/toolbar';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

import { TopToolbarComponent } from './layouts/top-toolbar/top-toolbar.component';
import { LandingComponent } from './pages/landing/landing/landing.component';
import { LandingBannerComponent } from './components/landing-banner/landing-banner.component';
import { LandingTopTrendingComponent } from './components/landing-top-trending/landing-top-trending.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TopTrendingItemComponent } from './components/top-trending-item/top-trending-item.component';
import { LandingPlatformsComponent } from './components/landing-platforms/landing-platforms.component';
import { LandingPlatformItemComponent } from './components/landing-platform-item/landing-platform-item.component';
import { CourseCardListComponent } from './components/home/course-card-list/course-card-list.component';
import { CourseTabviewComponent } from './components/home/course-tabview/course-tabview.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { InterestListComponent } from './components/home/interest-list/interest-list.component';
import { ArticleListComponent } from './components/home/article-list/article-list.component';
import { ArticleItemComponent } from './components/home/article-item/article-item.component';
import { PlatformEditorComponent } from './pages/editor/platform-editor/platform-editor.component';
import { EditorSidebarComponent } from './layouts/editor/editor-sidebar/editor-sidebar.component';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { FileUploaderComponent } from './components/utils/file-uploader/file-uploader.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryEditorComponent } from './pages/editor/category-editor/category-editor.component';
import { MessageService } from 'primeng/api';
import { CourseEditorComponent } from './pages/editor/course-editor/course-editor.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {TableModule} from 'primeng/table';
import { FlexMasterComponent } from './pages/flex-master/flex-master.component';
import { LoginComponent } from './pages/login/login/login.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditTableComponent } from './components/edit-table/edit-table.component';
import { CourseTableComponent } from './components/course-table/course-table.component';
import { CourseRequestsComponent } from './pages/editor/course-requests/course-requests.component';
import { UserEditorComponent } from './pages/editor/user-editor/user-editor.component';
import { BlogEditorComponent } from './pages/editor/blog-editor/blog-editor.component';
import {EditorModule} from 'primeng/editor';
import { LoadingComponent } from './pages/loading/loading.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { FavEditorComponent } from './pages/editor/fav-editor/fav-editor.component';

@NgModule({
  declarations: [
    TopMenuComponent,
    DashboardPgComponent,
    CourseCardComponent,
    CourseFilterComponent,
    DashboardBannerComponent,
    TopToolbarComponent,
    LandingComponent,
    LandingBannerComponent,
    LandingTopTrendingComponent,
    TopTrendingItemComponent,
    LandingPlatformsComponent,
    LandingPlatformItemComponent,
    CourseCardListComponent,
    CourseTabviewComponent,
    FooterComponent,
    InterestListComponent,
    ArticleListComponent,
    ArticleItemComponent,
    PlatformEditorComponent,
    EditorSidebarComponent,
    FileUploaderComponent,
    CategoryEditorComponent,
    CourseEditorComponent,
    AutocompleteComponent,
    FlexMasterComponent,
    LoginComponent,
    ErrorsComponent,
    SignupComponent,
    EditTableComponent,
    CourseTableComponent,
    CourseRequestsComponent,
    UserEditorComponent,
    BlogEditorComponent,
    LoadingComponent,
    FavEditorComponent
  ],
  imports: [
    MenubarModule,
    CommonModule,
    CardModule,
    CheckboxModule,
    TabViewModule,
    InputTextModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    RatingModule,
    FormsModule,
    ToolbarModule,
    CarouselModule,
    ButtonModule,
    MenuModule,
    FileUploadModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    InputTextareaModule,
    AutoCompleteModule,
    TableModule,
    EditorModule,
    ProgressSpinnerModule
  ],
  providers: [MessageService],
  exports: [
    MenubarModule,
    TopMenuComponent,
    CommonModule,
    CardModule,
    CheckboxModule,
    TabViewModule,
    InputTextModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    RatingModule,
    FormsModule,
    ToolbarModule,
    TopToolbarComponent,
    CarouselModule,
    FooterComponent,
    ButtonModule,
    MenuModule,
    FileUploadModule,
    ReactiveFormsModule,
    ToastModule,
    MessagesModule,
    InputTextareaModule,
    AutoCompleteModule,
    TableModule,
    EditorModule,
    ProgressSpinnerModule
  ],
})
export class SharedCustomModule {}
