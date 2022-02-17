import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
appliedFilters = new BehaviorSubject({});
currentFilter = this.appliedFilters.asObservable();
categoryId:any
platformId:any
platformName:any
categoryName:any

  constructor() { 
  }

  setFilters(filters:any){
    this.appliedFilters.next(filters);
  }
  getFilters(){
    return this.appliedFilters
  }
}
