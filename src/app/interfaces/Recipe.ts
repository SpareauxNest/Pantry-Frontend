import {Ingredient} from "./Ingredient";

export interface Recipe{
  id: number;
  name: string;
  link?: string;
  description?: string;
  ingredients: Ingredient[];
}
