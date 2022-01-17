import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = 
  [
    new Recipe('Test Recipe','This is Testing','https://i2.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/07/Food.jpg?fit=1200%2C643&ssl=1')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
