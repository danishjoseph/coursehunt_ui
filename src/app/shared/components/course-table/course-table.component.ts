import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss'],
})
export class CourseTableComponent implements OnInit {
  @Input() tableData: any;
  @Input() tableHeaders: any;
  @Input() tableTitle: any;
  @Input() platformData: any;
  @Input() categoriesData: any;
  @Input() levelData: any;
  @Input() certificateData: any;
  @Input() priceData: any;
  @Input() typeData: any;
  @Input() catmasterData: any;
  @Input() isRequest: any;

  @Output() onRowEditSaveOut = new EventEmitter<any>();
  @Output() onRowDeleteOut = new EventEmitter<any>();
  @Output() onCourseActivate = new EventEmitter<any>();
  first = 0;
  deleting = false;
  editingCus = false;
  clonedRow: { [s: string]: any } = {};

  constructor() {}

  ngOnInit(): void {
  }

  onActivateCourse(row:any){
    row.Status = true;
    this.onCourseActivate.emit(row)
  }

  onRowEditInit(row: any) {
    this.editingCus = true;
    this.clonedRow[row._id] = { ...row };
  }

  onRowDeleteInit(row: any) {
    this.clonedRow[row._id] = { ...row };
    this.deleting = true;
  }

  onRowEditSave(row: any) {
    this.editingCus = false;
    this.onRowEditSaveOut.emit(row);
  }

  onRowDelete(row: any) {
    row.Status = false;
    this.onRowDeleteOut.emit(row);
    this.deleting = false;
  }

  onRowEditCancel(row: any, index: number) {
    this.tableData[index] = this.clonedRow[row._id];
    this.editingCus = false;
    // delete this.tableData[row.id];
  }

  onRowDeleteCancel(row: any, index: number) {
    this.tableData[index] = this.clonedRow[row._id];
    this.deleting = false;
    // delete this.tableData[row.id];
  }

  onAutoCompleteSelected(flag: any, row: any, value: any) {
    switch (flag) {
      case 'platform':
        row.Platform = value.id;
        row.PlatformName = value.label;
        break;
      case 'category':
        row.Category = value.id;
        row.CategoryName = value.label;
        break;
      case 'level':
        row.Level = value.id;
        row.LevelName = value.label;
        break;
      case 'cert':
        row.Cert = value.id;
        row.CertificateName = value.label;
        break;
      case 'price':
        row.Price = value.id;
        row.PriceName = value.label;
        break;
      case 'type':
        row.Type = value.id;
        row.TypeName = value.label;
        break;
      case 'catmaster':
        row.Catmaster = value.id;
        row.CatmasterName = value.label;
        break;

      default:
        break;
    }
  }
}
