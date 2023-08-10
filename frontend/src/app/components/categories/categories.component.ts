import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/interfaces/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { ShowCategoriesService } from 'src/app/services/show-categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories[] = [];
  editForms: FormGroup[] = [];
  editMode: boolean = false;
  showMode:boolean = false;
  showModal:boolean = false;
  constructor(private categoryServ: CategoriesService, private formBuilder: FormBuilder,
    private toggleProductModal:ShowCategoriesService, private toggleModalServ: ShowCategoriesService ) {
       this.toggleModalServ.showCreateCategory.asObservable().subscribe((data)=>{
        this.showModal = data;
       });
    }

  ngOnInit(): void {
    this.getAllCategories();
    this.categories.forEach((category: any) => {
      category.editing = false;
      this.createEditForm(category);
    });
   
  }

  getAllCategories() {
    this.categoryServ.getAllCategories().subscribe(
      (data) => {
        this.categories = data.map((category: Categories) => ({
          ...category,
          editing: false,
          showConfirmation: false
        }));

        // Crear los formularios para cada categoría
        this.categories.forEach((category) => {
          this.createEditForm(category);
        });
      },
      (error) => {
        console.error('Error al obtener las categorías', error);
      }
    );
  }

  createEditForm(category: Categories) {
    const form = this.formBuilder.group({
      name: [category.name, Validators.required],
      description: [category.description, Validators.required]
    });

    this.editForms.push(form);
  }

  onEdit(index: number) {
    this.categories[index].editing = true;
  }

  onSave(index: number) {
    // Obtener el formulario reactivo para la categoría actual
    const form = this.editForms[index];

    if (form.valid) {
      // Obtener el nombre y la descripción del formulario
      const newName = form.value.name;
      const newDescription = form.value.description;

      // Obtener la categoría específica que deseas actualizar
      const categoryToUpdate: Categories = this.categories[index];

      // Actualizar el nombre y la descripción de la categoría
      categoryToUpdate.name = newName;
      categoryToUpdate.description = newDescription;

      // Crear el objeto que enviaremos al backend
      const updatedCategory = { name: newName, description: newDescription };

      this.categoryServ.updateCategory(categoryToUpdate.id, updatedCategory).subscribe(
        (response) => {
          console.log('Categoría actualizada con éxito', response);
          // Actualizar el estado de edición a falso
          categoryToUpdate.editing = false;
        },
        (error) => {
          console.error('Error al actualizar la categoría', error);
        }
      );
    }
  }

  toggleModal(){
    this.toggleProductModal.setShowCategory(true)
   }

  onCancel(index: number) {
    // Restaurar los valores originales del objeto
    const form = this.editForms[index];
    form.patchValue({
      name: this.categories[index].name,
      description: this.categories[index].description
    });

    this.categories[index].editing = false;
  }

  onDeleteConfirmation(index: number) {
    this.categories[index].showConfirmation = true;
  }

  onCancelDelete(index: number) {
    this.categories[index].showConfirmation = false;
  }

  onDelete(index: number) {
    // Eliminar la categoría del backend
    const categoryId = this.categories[index].id;

    this.categoryServ.deleteCategory(categoryId.toString()).subscribe(
      () => {
        console.log('Categoría eliminada con éxito');
        // Eliminar la categoría del array local
        this.categories.splice(index, 1);
      },
      (error) => {
        console.error('Error al eliminar la categoría', error);
      }
    );
  }
}
