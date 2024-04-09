import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from "../../interfaces/Recipe";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent implements OnInit{
  @Input()
  recipe!: Recipe;
  //faTimes = faTimes;
  constructor() {
  }

  ngOnInit() {
  }
}
