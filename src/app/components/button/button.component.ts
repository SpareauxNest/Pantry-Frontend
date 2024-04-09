import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  @Input() text: string | undefined;
  @Input() color: string | undefined;
  @Output() addBtnClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
      this.addBtnClick.emit();
  }

  protected readonly onclick = onclick;
}
