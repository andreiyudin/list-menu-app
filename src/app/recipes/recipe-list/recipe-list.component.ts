import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

	recipes: Recipe[] = [
		new Recipe('A test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Handi-chicken-recipe.jpg/800px-Handi-chicken-recipe.jpg'),
		new Recipe('Another test Recipe', 'This is a test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Handi-chicken-recipe.jpg/800px-Handi-chicken-recipe.jpg')
	];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
