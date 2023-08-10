import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  @Output() getAllProductsEvent = new EventEmitter<void>();
  
  products: any;
  showModal:boolean = false ;
  constructor(private producService: ProductsService,
    private productSelectedServ: SelectedProductService,
    private toggleModalServ: ToggleModalUpdateService){
      this.toggleModalServ.getModal().subscribe(
        (data)=>{this.showModal = data}
      )

    }


    emitGetAllProductsEvent() {
      this.getAllProductsEvent.emit();
    }

  ngOnInit(): void{
    this.getAllProducts()
    this.productSelectedServ.getProduct().subscribe({
      next: (res:any) => {
        this.selectedProduct = res;
      }
    })
  }

  toggleModal($event:any){
    this.showModal = !this.showModal
    console.log($event)
  }
  getAllProducts(){
    this.producService.getAllProducts().subscribe(
      (data) =>{
        this.products = data
        console.log(data)
      },
      (error) =>{
        console.log(error)
      }
    )
  }
 
 
  
  selectedProduct: Product | null = null;

  onProductSelected(product: Product): void {
    this.selectedProduct = product;
  }

}
