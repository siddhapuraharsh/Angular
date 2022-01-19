import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = 
  [
    new Recipe
    (
      'Punjabi Sabji',
      'This is Punjabi Food',
      'https://i2.wp.com/www.smartprix.com/bytes/wp-content/uploads/2018/07/Food.jpg?fit=1200%2C643&ssl=1',
        [
          new Ingredient('Paneer',5),
          new Ingredient('Spices',20)
        ]
    )
  ];

  constructor(private slService:ShoppingListService)
  {

  }

  getRecipes()
  {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[])
  {
    this.slService.addIngredients(ingredients);
  }
}