import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { ShowCategoriesService } from 'src/app/services/show-categories.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent {
  createDataCategory: FormGroup = new FormGroup({});

  constructor(private productServ: CategoriesService,
    private formBuilder : FormBuilder,
    private toggleModalServ: ShowCategoriesService){
    this.createDataCategory = this.formBuilder.group({
      name:[ '',[Validators.required]],
      description:[ '',[Validators.required]],
   
    })
 
  }

  get name() {
    return this.createDataCategory.get('name');
  }
  
  get description() {
    return this.createDataCategory.get('description');
  }

  closeModal() {
    this.toggleModalServ.setShowCategory(false)
  }

  onCreateCategory(){
      this.productServ.createCategory(this.createDataCategory.value).subscribe(
        (response) => {
          console.log('Producto actualizado con éxito', response);
        },
        (error) => {
          console.error('Error al actualizar el producto', error);
        }
      );
    } 
}
