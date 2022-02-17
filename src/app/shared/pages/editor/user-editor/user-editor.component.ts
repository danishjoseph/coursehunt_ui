import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { EditorService } from 'src/app/shared/services/editor/editor.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  url: any = 'assets/images/img-placeholder.png';
  coverFile: any;
  userName: any;
  // platformLink: any;
  userForm: any;
  userDataHeaders = []
  userTableData = []
  rolesData: any;
  constructor(
    private editorApiService: EditorService,
    private formBuilder: FormBuilder,
    private loginService: LoginService

  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      // coverImg: [''],
      userName:'',
      userEmail: '',
      userPassword:'',
      userRole:''
    });

    this.fetchDropDowns();
    this.initTable();
  }
  onDropDownSelect(event:any, flag:any){
    switch (flag) {
      case 'role':
        this.userForm.controls['userRole'].setValue(event.id)
        break;
    
      default:
        break;
    }
    
  }

  fetchDropDowns(){
    this.fetchMaster("role").subscribe((response: any)=>{
      this.rolesData = response;
    });
  }

  fetchMaster(type: string) {
    return new Observable((observer) => {
    this.editorApiService.getMasters(type).subscribe((response: any) => {
      let returnData;
      response.data.map((element: any) => {
        if(element.src)
        {}
        // element.src = this.constantService.IMG_URL + element.src;
        else
        element.src = null;
      });

      returnData = response.data;
      observer.next(returnData);
      observer.complete();
    });
  });
  }

  onPlatformImgChange(files: any) {
    var reader = new FileReader();
    if (files.length > 0) {
      reader.readAsDataURL(files[0]);
      this.coverFile = files[0]
      this.userForm.get('coverImg').setValue(this.coverFile)
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
    // formData2.append('coverImg', this.userForm.get('coverImg').value);
    formData2.append('fullname', this.userForm.get('userName').value);
    formData2.append('username', this.userForm.get('userEmail').value);
    formData2.append('password', this.userForm.get('userPassword').value);
    formData2.append('role', this.userForm.get('userRole').value);
    
    this.loginService.register(formData2).subscribe((res:any)=>{
      this.initTable();
    })
  }

  onUserEdit(event: any){
    const formData = new FormData();
    formData.append('_id', event.id);
    formData.append('fullname', event.name);
    formData.append('username', event.email);
    formData.append('roleId', event.role);

    
    this.editorApiService.updateUser(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }
  onUserDelete(event: any){
    const formData = new FormData();
    formData.append('_id', event.id);

    this.editorApiService.deletePlatform(formData).subscribe((res:any)=>{
      this.initTable();
    })
  }

  initTable(){
   this.editorApiService.getUsersTable().subscribe((res: any) => {
    this.userDataHeaders = res.headers;
    this.userTableData = res.data;
   });
  }
}
