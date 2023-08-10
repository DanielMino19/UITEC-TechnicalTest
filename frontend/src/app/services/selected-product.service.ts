import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductService {
  constructor() { }

  selectedProduct: BehaviorSubject<any> = new BehaviorSubject(undefined);

  setProduct(value: any) {
    this.selectedProduct.next(value);
  }

  getProduct() {
    return this.selectedProduct.asObservable();
  }
}
