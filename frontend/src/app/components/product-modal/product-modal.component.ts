import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {
  createDataProduct: FormGroup = new FormGroup({});
  @Output() switchModal = new EventEmitter<boolean>();
  @Output() getAllProductsEvent = new EventEmitter<any>()
  

  onSwitchModal(){
    this.switchModal.emit(false)
  }

  constructor(private productServ: ProductsService,
    private formBuilder : FormBuilder){
    this.createDataProduct = this.formBuilder.group({
      name:[ '',[Validators.required]],
      value:[ '',[Validators.required]],
      expire_date:[ '',[Validators.required]],
      amount_stock:[ '',[Validators.required]],
      imgs:[ '',[Validators.required]],
      perishables:['',[Validators.required]],
      categorie_id:[ '',[Validators.required]]
    })
 
  }

  get name() {
    return this.createDataProduct.get('name');
  }
  
  get value() {
    return this.createDataProduct.get('value');
  }

  get expire_date() {
    return this.createDataProduct.get('expire_date');
  }

  get amount_stock() {
    return this.createDataProduct.get('amount_stock');
  }

  get imgs() {
    return this.createDataProduct.get('imgs');
  }

  get perishables() {
    return this.createDataProduct.get('perishables');
  }

  get categorie_id() {
    return this.createDataProduct.get('categorie_id');
  }
  

  onCreateProduct(){
      this.productServ.createProduct(this.createDataProduct.value).subscribe(
        (response) => {
          console.log('Producto actualizado con éxito', response);
          this.getAllProductsEvent.emit();
        },
        (error) => {
          console.error('Error al actualizar el producto', error);
        }
      );
    } 


}
