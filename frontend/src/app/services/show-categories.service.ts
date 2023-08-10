import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowCategoriesService {

  constructor() { }
  showCreateCategory: Subject<boolean> = new Subject();
  showCategory: Subject<boolean> = new Subject();

  setshowCategory(value: boolean) {
     this.showCategory.next(value);
   }

   getshowCategory() {
     return this.showCategory.asObservable();
   }

   setShowCategory(value: boolean) {
    this.showCreateCategory.next(value);
  }
 
  getShowCategory() {
    this.showCreateCategory.asObservable();
  }
 
}
