import { Component } from '@angular/core';
import { ShowCategoriesService } from 'src/app/services/show-categories.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showCategories: boolean = false;

  constructor(private showCategory: ShowCategoriesService){
    

  }

  toggleCategories(){
    this.showCategories = !this.showCategories;
    this.showCategory.setshowCategory(this.showCategories)
  }

}

