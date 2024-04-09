import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../interfaces/Recipe";
import {NgForOf} from "@angular/common";
import {RecipeService} from "../../services/recipe.service";
import {RecipeItemComponent} from "../recipe-item/recipe-item.component";
import { RECIPES } from '../../mock-recipes';


@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrl: './recipe-lists.component.css'
})
export class RecipeListsComponent implements OnInit{
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes) => (this.recipes = recipes));
  }
}
