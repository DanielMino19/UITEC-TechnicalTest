import { Component } from '@angular/core';
import { ShowCategoriesService } from 'src/app/services/show-categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showCategories: boolean = false;

  constructor(private showCategory: ShowCategoriesService){
    this.showCategory.getshowCategory().subscribe(
      (data)=>{this.showCategories = data}
    )
  }
}
