import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.scss']
})
export class CategoryNavbarComponent implements OnInit {

  categories: any= [];

  constructor( private categoriesService: CategoriesService ){}


  ngOnInit(): void {
    this.categoriesService.LoadData().subscribe( cat => {
      this.categories = cat;
      console.log(this.categories);
    });
  }

}
