import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {
  uploadedFiles: any[] = [];
  @Output() onFileUpload = new EventEmitter<any>();
  @Output() onFileCleared = new EventEmitter<any>();

  constructor(
    // private messageService: MessageService
    private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
  }
  
  onBasicUpload(event: any) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    
    this.onFileUpload.emit(this.uploadedFiles);

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}

onClear(){
  this.uploadedFiles = [];
  this.onFileCleared.emit();
}

onRemove(event:any){
  if(event.file){
    this.uploadedFiles.splice(event.file);
  }
  this.onFileUpload.emit(this.uploadedFiles);

  
}

}
