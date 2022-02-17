import { Component, OnInit } from '@angular/core';
import { EditorService } from 'src/app/shared/services/editor/editor.service';

@Component({
  selector: 'app-editor-sidebar',
  templateUrl: './editor-sidebar.component.html',
  styleUrls: ['./editor-sidebar.component.scss']
})
export class EditorSidebarComponent implements OnInit {
  items: any;
  constructor(
    private apiService: EditorService
  ) { }

  ngOnInit(): void {
    this.apiService.getMenus().subscribe((res: any)=>{
      this.items = res.data
    })
    // this.items = [
    //   {label: 'Platform', icon: 'pi pi-briefcase', routerLink:['/editor/platform']},
    //   {label: 'Category', icon: 'pi pi-desktop', routerLink:['/editor/category']},
    //   {label: 'Courses', icon: 'pi pi-video', routerLink:['/editor/course']},
    //   {
    //     label: 'File',
    //     items: [
    //         {},
    //         {label: 'Open', icon: 'pi pi-download'}
    //     ]
    // },
    // {
    //     label: 'Edit',
    //     items: [
    //         {label: 'Undo', icon: 'pi pi-refresh'},
    //         {label: 'Redo', icon: 'pi pi-repeat'}
    //     ]
    // }
    // ];
  }

}
