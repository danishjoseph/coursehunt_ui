import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { EditorService } from 'src/app/shared/services/editor/editor.service';

@Component({
  selector: 'app-platform-editor',
  templateUrl: './platform-editor.component.html',
  styleUrls: ['./platform-editor.component.scss'],
})
export class PlatformEditorComponent implements OnInit {
  url: any = 'assets/images/img-placeholder.png';
  coverFile: any;
  platformName: any;
  platformLink: any;
  platformForm: any;
  platformDataHeaders = []
  platformData = []
  constructor(
    private editorApiService: EditorService,
    private formBuilder: FormBuilder

  ) {}

  ngOnInit(): void {
    this.platformForm = this.formBuilder.group({
      coverImg: [''],
      platformName:'',
      platformRating: 0,
      platformLink:''
    });

    this.initTable();
  }

  onPlatformImgChange(files: any) {
    var reader = new FileReader();
    if (files.length > 0) {
      reader.readAsDataURL(files[0]);
      this.coverFile = files[0]
      this.platformForm.get('coverImg').setValue(this.coverFile)
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

  submitPlatform(formInput:any){

    const formData2 = new FormData();
    formData2.append('coverImg', this.platformForm.get('coverImg').value);
    formData2.append('platformName', this.platformForm.get('platformName').value);
    formData2.append('platformLink', this.platformForm.get('platformLink').value);
    formData2.append('platformRating', this.platformForm.get('platformRating').value);
    
    this.editorApiService.addPlatform(formData2).subscribe((res:any)=>{
      this.initTable();
    })
  }

  onPlatformEdit(event: any){
    const formData = new FormData();
    formData.append('_id', event.id);
    formData.append('name', event.name? event.name : '');
    formData.append('rating', event.rating ? event.rating : 0);
    formData.append('link', event.link ? event.link : '');
    formData.append('featured', event.featured);

    
    this.editorApiService.updatePlatform(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }
  onPlatformDelete(event: any){
    const formData = new FormData();
    formData.append('_id', event.id);

    this.editorApiService.deletePlatform(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }

  initTable(){
   this.editorApiService.getPlatformsTable().subscribe((res: any) => {
    this.platformDataHeaders = res.headers;
    this.platformData = res.data;
   });
  }
}

