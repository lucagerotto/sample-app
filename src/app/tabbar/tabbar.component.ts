import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TabbarItem } from './model';

@Component({
  selector: 'app-tabbar',
  template: `
    <ul class="nav nav-tabs">
      <li class="nav-item" *ngFor="let item of items" (click)="tabHandler(item)">
        <a class="nav-link" [ngClass]="{'active': active?.id === item.id}" >{{item.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>`,
  styles: [``]
})
export class TabbarComponent {
  @Input() items: TabbarItem[];
  @Input() active: TabbarItem;
  @Output() tabClick: EventEmitter<TabbarItem> = new EventEmitter();
  
  tabHandler(item){
    this.tabClick.emit(item);
  }
}
