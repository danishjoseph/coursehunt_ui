import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { ApiConstantsService } from 'src/app/shared/services/editor/api-constants.service';
import { EditorService } from 'src/app/shared/services/editor/editor.service';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss'],
})
export class CategoryEditorComponent implements OnInit {
  placeholderUrl = 'assets/images/img-placeholder.png';
  url: any = this.placeholderUrl;
  categoryForm: any;
  coverFile: any;
  allowedImageHeight = 180;
  allowedImageWidth = 250;
  categoryDataHeaders: any;
  categoryData: any;
  catmasterData: any;
  selectedCatmasterId: any;

  constructor(
    private editorApiService: EditorService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private constantService: ApiConstantsService
  ) {}

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      coverImg: [''],
      categoryName: '',
    });
    this.initTable();
  }
  onPlatformImgChange(files: any) {
    var reader = new FileReader();
    if (files.length > 0) {
      reader.readAsDataURL(files[0]);
      this.coverFile = files[0];
      this.categoryForm.get('coverImg').setValue(this.coverFile);
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        if (event.target != null) {
          this.validateImage(event.target.result).subscribe(
            (imageResponse: any) => {
              if (
                imageResponse.width === this.allowedImageWidth &&
                imageResponse.height === this.allowedImageHeight
              ) {
                this.url = imageResponse.src;
              } else {
                console.error('error, image not valid');
                this.showMessage(
                  'error',
                  'Service Message',
                  'Please choose valid image with ' +
                    'width:' +
                    this.allowedImageWidth +
                    ' and height:' +
                    this.allowedImageHeight
                );
              }
            }
          );
        }
      };
    } else {
      this.clearImg();
    }
  }

  clearImg() {
    this.url = this.placeholderUrl;
  }
  
  onCatmasterSelect(value: any) {
    this.selectedCatmasterId = value.id
  }

  submitCategory() {
    if (this.url !== this.placeholderUrl) {
      const formData2 = new FormData();
      formData2.append('coverImg', this.categoryForm.get('coverImg').value);
      formData2.append('Catmaster', this.selectedCatmasterId);
      formData2.append(
        'categoryName',
        this.categoryForm.get('categoryName').value
      );

      this.editorApiService.addCategory(formData2).subscribe((res: any) => {
        this.initTable();
      });
    } else {
      this.showMessage('error', 'Service Message', 'Please add valid Image');
    }
  }

  validateImage(imgSrc: any) {
    return new Observable((observer) => {
      const aH = this.allowedImageHeight;
      const aW = this.allowedImageWidth;
      const img = new Image();
      img.onload = function (event) {
        let returnImg: any = {};
        const loadedImage: any = event.currentTarget;
        returnImg.width = loadedImage.width;
        returnImg.height = loadedImage.height;
        returnImg.src = imgSrc;
        observer.next(returnImg);
        observer.complete();
      };
      img.src = imgSrc;
    });
  }
  onCategoryEdit(event: any){
    const formData = new FormData();
    formData.append('_id', event.id);
    formData.append('name', event.name? event.name : '');
    formData.append('Catmaster', event.Catmaster);
    
    this.editorApiService.updateCategory(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }
  onCategoryDelete(event: any){
    const formData = new FormData();
    formData.append('_id', event.id);

    this.editorApiService.deleteCategory(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }

  initTable(){
    this.fetchMaster("catmaster").subscribe(response=>{
      this.catmasterData = response;
    });
   this.editorApiService.getCategoryTable().subscribe((res: any) => {
    this.categoryDataHeaders = res.headers;
    this.categoryData = res.data;
   });
  }

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
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
