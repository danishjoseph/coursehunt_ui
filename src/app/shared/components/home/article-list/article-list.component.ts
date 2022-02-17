import { Component, Input, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/shared/services/dashboard/dashboard.service';
import { ApiConstantsService } from 'src/app/shared/services/editor/api-constants.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
@Input() interestCategoryId: any;

  articleList = [
    {},
    {},
    {}
  ]
  constructor(
    private APIService: DashboardService,
    private constantService: ApiConstantsService
  ) { }

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(){
    const formData = new FormData();
    formData.append('_id', this.interestCategoryId);

    this.APIService.getBlogs(formData).subscribe((response: any) => {
      let temp = response.data
      temp.map((element: any) => {
        element.imgSrc = this.constantService.IMG_URL+element.destination+element.cover;
      });
      this.articleList = temp
    });              
  }

}
