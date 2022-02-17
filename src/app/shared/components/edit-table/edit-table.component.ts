import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-table',
  templateUrl: './edit-table.component.html',
  styleUrls: ['./edit-table.component.scss'],
})
export class EditTableComponent implements OnInit {
  @Input() tableData: any;
  @Input() tableHeaders: any;
  @Input() tableTitle: any;
  @Output() onRowEditSaveOut = new EventEmitter<any>();
  @Output() onRowDeleteOut = new EventEmitter<any>();
  first = 0;
  deleting = false;
  selectedDropDownValue = null;
  selectedDropDownPointer = null;
  clonedRow: { [s: string]: any } = {};

  constructor() {}

  ngOnInit(): void {}

  onRowEditInit(row: any) {
    this.clonedRow[row.id] = { ...row };
  }

  onDropDownSelect(event:any){
    this.selectedDropDownValue = event._id
    this.selectedDropDownPointer = event.label
  }
  initValueProcess(col:any, row:any){
    row[col.field] = this.selectedDropDownPointer
    row[col.parent] = this.selectedDropDownValue
  }

  onRowDeleteInit(row: any) {
    this.clonedRow[row.id] = { ...row };
    this.deleting = true
  }

  onRowEditSave(row: any) {
    this.onRowEditSaveOut.emit(row);
  }

  onRowDelete(row: any) {
    this.onRowDeleteOut.emit(row);
    this.deleting = false;
  }

  onRowEditCancel(row: any, index: number) {
    this.tableData[index] = this.clonedRow[row.id];
    // delete this.tableData[row.id];
  }

  onRowDeleteCancel(row: any, index: number) {
    this.tableData[index] = this.clonedRow[row.id];
    this.deleting = false;
    // delete this.tableData[row.id];
  }
}
