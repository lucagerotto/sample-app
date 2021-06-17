import { style } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-hello',
  template: `
  <div (click)="open.emit(true)">{{name}}</div>
  `,
  styles: [`
  `]
})
export class HelloComponent implements OnInit {
@Input() name="unknown"
@Output() open : EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
