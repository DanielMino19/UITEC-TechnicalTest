import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { SelectedProductService } from 'src/app/services/selected-product.service';
import { ToggleModalUpdateService } from 'src/app/services/toggle-modal-update.service';
import {
  Modal,
  Ripple,
  initTE,
} from "tw-elements";
initTE({ Modal, Ripple });

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product : any | undefined;
  @Output() getAllProductsEvent = new EventEmitter<any>()
  constructor(private toggleModalServ: ToggleModalUpdateService,
    private productServ: ProductsService){
    
  }
 
title = 'tokio';


productService = inject(SelectedProductService);
selectedProduct: any;
showModal:boolean = false

deleteCard(id:number){
  this.productServ.deleteProduct(id).subscribe((response)=>{
    console.log(response);
    this.getAllProductsEvent.emit()
  })

}

toggleModal(){
 this.toggleModalServ.setModal(true)
}

setProduct() {
  this.productService.setProduct(this.product);
}

}
