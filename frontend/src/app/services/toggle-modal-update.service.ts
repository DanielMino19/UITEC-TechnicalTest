import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleModalUpdateService {

  constructor() { }

  selectedModal: Subject<boolean> = new Subject();

 setModal(value: boolean) {
    this.selectedModal.next(value);
  }

  getModal() {
    return this.selectedModal.asObservable();
  }
}
