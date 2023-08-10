import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { SelectedProductService } from 'src/app/services/selected-product.service';
import { ToggleModalUpdateService } from 'src/app/services/toggle-modal-update.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-update-product-modal',
  templateUrl: './update-product-modal.component.html',
  styleUrls: ['./update-product-modal.component.css']
})
export class UpdateProductModalComponent implements OnInit {
  product:Product | null = null;
  @Output() getAllProductsEvent = new EventEmitter<void>();
  updateDataProduct: FormGroup = new FormGroup({});

  constructor(private toggleModalServ : ToggleModalUpdateService,
    private getSelectedProduct: SelectedProductService, private formBuilder : FormBuilder,
    private productServ: ProductsService){
      
     
   
    }

    ngOnInit(): void {
      this.getSelectedProduct.getProduct().subscribe((data)=>{
        this.product = data;
        this.updateDataProduct = this.formBuilder.group({
          name:[this.product?.name || '',[Validators.required]],
          value:[this.product?.value || '',[Validators.required]],
          expire_date:[this.product?.expire_date || '',[Validators.required]],
          amount_stock:[this.product?.amount_stock || '',[Validators.required]],
          imgs:[this.product?.imgs || '',[Validators.required]],
          perishables:[this.product?.perishables || false,[Validators.required]],
          categorie_id:[this.product?.categorie_id || '',[Validators.required]]
        })
      }); 
    }

    get name() {
      return this.updateDataProduct.get('name');
    }
    
    get value() {
      return this.updateDataProduct.get('value');
    }
  
    get expire_date() {
      return this.updateDataProduct.get('expire_date');
    }
  
    get amount_stock() {
      return this.updateDataProduct.get('amount_stock');
    }
  
    get imgs() {
      return this.updateDataProduct.get('imgs');
    }
  
    get perishables() {
      return this.updateDataProduct.get('perishables');
    }
  
    get categorie_id() {
      return this.updateDataProduct.get('categorie_id');
    }
    
  closeModal() {
    this.toggleModalServ.setModal(false)
  }
  
  onUpdateProduct(){
    if (this.product) {
      this.productServ.updateProduct(this.product.id, this.updateDataProduct.value).subscribe(
        (response) => {
          this.closeModal()
          console.log('Producto actualizado con éxito', response);
          console.log(this.updateDataProduct.value)
          this.getAllProductsEvent.emit()
        },
        (error) => {
          console.error('Error al actualizar el producto', error);
        }
      );
    } else {
      console.error('No se puede actualizar el producto porque no hay un producto seleccionado.');
    }
  }

}
