import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Recipe} from "../interfaces/Recipe";
import {RECIPES} from "../mock-recipes";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
private apiUrl = 'http://localhost:8080/recipe/getAll'


  constructor(private http:HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl)
  }
}
