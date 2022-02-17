import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { ApiConstantsService } from 'src/app/shared/services/editor/api-constants.service';
import { EditorService } from 'src/app/shared/services/editor/editor.service';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.scss'],
})
export class CourseEditorComponent implements OnInit {
  placeholderUrl = 'assets/images/img-placeholder.png';
  url: any = this.placeholderUrl;
  courseForm: any;
  coverFile: any;
  allowedImageHeight = 141;
  allowedImageWidth = 266;
  platformData: any;
  categoriesData: any;
  priceData: any;
  levelData: any;
  typeData: any;
  catmasterData: any;
  selectedTypeId: any;
  selectedCatmasterId: any;
  selectedPlatformId: any;
  selectedCategoryId: any;
  selectedLevelId: any;
  selectedPriceId: any;
  selectedCertId: any;
  certificateData: any;
  durationInMins = 0;
  durationMasterData: any = [
    { label: 'Mins', counter: 1, id: 1 },
    { label: 'Hour/s', counter: 60, id: 2 },
    { label: 'Day/s', counter: 1440, id: 3 },
    { label: 'Month/s', counter: 43200, id: 4 },
  ];
  courseDataHeaders: any;
  courseTableData: any;
  constructor(
    private editorApiService: EditorService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private constantService: ApiConstantsService
  ) {}

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      coverImg: [''],
      courseName: '',
      courseRating: '',
      courseDescription: '',
      courseDuration: 0,
    });
    this.fetDropDownData();
    this.initTable();
  }

  initTable(){
    this.editorApiService.getCourseTable().subscribe((res: any) => {
     this.courseDataHeaders = res.headers;
     this.courseTableData = res.data;
    });
   }

   onCourseEdit(event: any){
    const formData = new FormData();
    
    formData.append('_id', event._id);
    formData.append('Name', event.Name);
    formData.append('Rating', event.Rating);
    formData.append('Category', event.Category);
    formData.append('Catmaster', event.Catmaster);
    formData.append('Cert', event.Cert);
    formData.append('Description', event.Description);
    formData.append('Level', event.Level);
    formData.append('Platform', event.Platform);
    formData.append('Price', event.Price);
    formData.append('Rating', event.Rating);
    formData.append('Type', event.Type);

    
    this.editorApiService.updateCourse(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }
  onCourseDelete(event: any){
    const formData = new FormData();
    formData.append('_id', event._id);

    this.editorApiService.deactivateCourse(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }

  fetDropDownData() {
    this.editorApiService.getPlatforms().subscribe((response: any) => {
      this.platformData = response.data;
      this.platformData.map((element: any) => {
        element.src = this.constantService.IMG_URL + element.src;
      });
    });

    this.editorApiService.getCategories().subscribe((response: any) => {
      this.categoriesData = response.data;
      this.categoriesData.map((element: any) => {
        element.src = this.constantService.IMG_URL + element.src;
      });
    });

    this.fetchMaster("level").subscribe(response=>{
      this.levelData = response;
    });
    this.fetchMaster("cert").subscribe(response=>{
      this.certificateData = response;
    });
    this.fetchMaster("price").subscribe(response=>{
      this.priceData = response;
    });
    this.fetchMaster("type").subscribe(response=>{
      this.typeData = response;
    });
    this.fetchMaster("catmaster").subscribe(response=>{
      this.catmasterData = response;
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
  onPlatformSelect(value: any) {
    this.selectedPlatformId = value.id
  }

  onCategorySelect(value: any) {
    this.selectedCategoryId = value.id
  }

  onTypeSelect(value: any) {
    this.selectedTypeId = value.id
  }

  onCatmasterSelect(value: any) {
    this.selectedCatmasterId = value.id
  }
  onLevelSelect(value: any) {
    this.selectedLevelId = value.id
  }

  onCertSelect(value: any) {
    this.selectedCertId = value.id
  }

  onPriceSelect(value: any) {
    this.selectedPriceId = value.id
  }

  onDurationSelect(value: any) {
    this.durationInMins =
      parseInt(this.courseForm.get('courseDuration').value) *
      parseInt(value.counter);
  }

  submitCourse() {
    if (this.url !== this.placeholderUrl) {
      const formData2 = new FormData();
      try {
        formData2.append('coverImg', this.courseForm.get('coverImg').value);
        formData2.append('courseName', this.courseForm.get('courseName').value);
        formData2.append('courseDescription', this.courseForm.get('courseDescription').value);
        formData2.append('courseRating', this.courseForm.get('courseRating').value);
        formData2.append('coursePrice', this.selectedPriceId);
        formData2.append('courseLevel', this.selectedLevelId);
        formData2.append('courseCert', this.selectedCertId);
        formData2.append('courseDuration', this.durationInMins+'');
        formData2.append('courseCategory', this.selectedCategoryId);
        formData2.append('coursePlatform', this.selectedPlatformId);
        formData2.append('courseType', this.selectedTypeId);
        formData2.append('coursemaster', this.selectedCatmasterId);
  
        this.editorApiService.addCourse(formData2).subscribe((res: any) => {
          this.initTable();
        });
        
      } catch (error) {
        console.error(error)
        
      }
    } else {
      this.showMessage('error', 'Service Message', 'Please add valid Image');
    }
  }

  onCourseImgChange(files: any) {
    var reader = new FileReader();
    if (files.length > 0) {
      reader.readAsDataURL(files[0]);
      this.coverFile = files[0];
      this.courseForm.get('coverImg').setValue(this.coverFile);
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

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({
      severity: severity,
      summary: summary,
      detail: detail,
    });
  }
}
