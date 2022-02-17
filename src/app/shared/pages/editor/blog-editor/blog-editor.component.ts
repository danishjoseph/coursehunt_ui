import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiConstantsService } from 'src/app/shared/services/editor/api-constants.service';
import { EditorService } from 'src/app/shared/services/editor/editor.service';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.scss']
})
export class BlogEditorComponent implements OnInit {

  url: any = 'assets/images/img-placeholder.png';
  coverFile: any;
  blogName: any;
  // platformLink: any;
  blogForm: any;
  catmasterData: any;
  blogDataHeaders = []
  blogsData = []
  selectedCatmasterId: any;
  constructor(
    private editorApiService: EditorService,
    private formBuilder: FormBuilder,
    private constantService: ApiConstantsService

  ) {}

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      coverImg: [''],
      blogName:'',
      blogTitle:'',
      blogDesc: '',
      blogShortDesc:''
    });

    this.initTable();
  }

  onBlogImgChange(files: any) {
    var reader = new FileReader();
    if (files.length > 0) {
      reader.readAsDataURL(files[0]);
      this.coverFile = files[0]
      this.blogForm.get('coverImg').setValue(this.coverFile)
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        if (event.target != null) {
          this.url = event.target.result;
        }
      };
    }
    else{
      this.clearImg();
    }
  }

  clearImg() {
    this.url = 'assets/images/img-placeholder.png';
  }

  submitBlog(formInput:any){

    const formData2 = new FormData();
   
    formData2.append('coverImg', this.blogForm.get('coverImg').value);
    formData2.append('blogName', this.blogForm.get('blogName').value);
    formData2.append('blogTitle', this.blogForm.get('blogTitle').value);
    formData2.append('blogDesc', this.blogForm.get('blogDesc').value);
    formData2.append('blogShortDesc', this.blogForm.get('blogShortDesc').value);
    formData2.append('blogCatmaster', this.selectedCatmasterId);
    
    this.editorApiService.addBlog(formData2).subscribe((res:any)=>{
      this.initTable();
    })
  }

  onBlogEdit(event: any){
    const formData = new FormData();
    formData.append('_id', event.id);
    formData.append('name', event.name);
    formData.append('shortDesc', event.shortDesc);
    formData.append('desc', event.desc);
    formData.append('featured', event.featured);
    formData.append('title', event.title);

    
    this.editorApiService.updateBlog(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }
  onBlogDelete(event: any){
    const formData = new FormData();
    formData.append('_id', event.id);

    this.editorApiService.deleteBlog(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }

  initTable(){
    this.fetchMaster("catmaster").subscribe(response=>{
      this.catmasterData = response;
    });
   this.editorApiService.getBlogsTable().subscribe((res: any) => {
    this.blogDataHeaders = res.headers;
    this.blogsData = res.data;
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

  onCatmasterSelect(value: any) {
    this.selectedCatmasterId = value.id
  }

}
