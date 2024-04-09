import { Component,OnInit  } from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  constructor() {
  }

  ngOnInit(): void {
  }

  toggleAddRecipe() {
    console.log('toggle');
  }
}
