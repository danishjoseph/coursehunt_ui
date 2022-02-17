import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiConstantsService } from '../../services/editor/api-constants.service';
import { EditorService } from '../../services/editor/editor.service';

@Component({
  selector: 'app-flex-master',
  templateUrl: './flex-master.component.html',
  styleUrls: ['./flex-master.component.scss']
})
export class FlexMasterComponent implements OnInit {
  flexData: any;
  flexHeader = "Elements";
  constructor(
    private router: Router,
    private editorApiService: EditorService,
    private constantService: ApiConstantsService
    ) { }
    
    ngOnInit(): void {
      this.flexSwitch(this.router.url);
    }
    
    flexSwitch(switcher: any){
      switch (switcher) {
        case '/categories':
          this.editorApiService.getCategories().subscribe((response: any) => {
            let temp = response.data
            temp.map((element: any) => {
              element.imgSrc = this.constantService.IMG_URL+element.src;
              element.flag = 'category';
              this.flexHeader = 'Categories';
              element.name = element.label;

            });
            this.flexData = temp
          });              
          break;

          case '/platforms':
            this.editorApiService.getPlatforms().subscribe((response: any) => {
              let temp = response.data
              temp.map((element: any) => {
                element.imgSrc = this.constantService.IMG_URL+element.src;
                element.name = element.label;
                element.flag = 'platform'
              this.flexHeader = 'Platforms';

              });
              this.flexData = temp
            });              
            break;
      
        default:
          break;
      }
      
    }
    

    fetchMaster(type: string) {
      return new Observable((observer) => {
      this.editorApiService.getMasters(type).subscribe((response: any) => {
        let returnData;
        response.data.map((element: any) => {
          if(element.src)
          element.src = this.constantService.IMG_URL + element.src;
          else
          element.src = null;
        });
  
        returnData = response.data;
        observer.next(returnData);
        observer.complete();
      });
    });
    }
}
