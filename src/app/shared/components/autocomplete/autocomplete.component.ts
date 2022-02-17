import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  @Input() dataInput: any;
  @Input() label: any;
  @Output() onValueSelect = new EventEmitter<any>();
  selectedLabelAdvanced: any;
  filteredData: any;

  constructor() {}

  ngOnInit(): void {
  }

  onSelect(value: any) {
    this.onValueSelect.emit(value);
  }
  filterData(event: any) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.dataInput.length; i++) {
      let dataElement = this.dataInput[i];
      if (dataElement.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(dataElement);
      }
    }

    this.filteredData = filtered;
  }
}
