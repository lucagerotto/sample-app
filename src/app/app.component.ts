import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from './model';
import { TabbarItem } from './tabbar/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-app';
  loaded = true;
  url = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
  
  veicoli = [{tipo:'car'},{tipo:'motorcycle'},{tipo:'bike'}];

  users: User[];

  ingredients = [
    'avocado',
    'pomodoro',
    'lattuga',
    'maionese',
    'pancetta',
    'pane'
  ];


  @ViewChild('label') label: ElementRef;
  view(){
    console.log(this.label.nativeElement.value);
  }


  tabs : TabbarItem[] = [
    {id:1,title:"Primo", desc:'Sono il primo'},
    {id:2,title:"Secondo", desc:'Sono il secondo'},
    {id:3,title:"Terzo", desc:'Sono il terzo'}
  ];
  tabActive = this.tabs[0];



  delete(item: string) {
    this.ingredients = this.ingredients.filter( (ingredient) => ingredient !== item);
  }

  identify(index, item){
    return item; 
 }

 constructor(private http:HttpClient){}

 getUsers(){
   this.http.get<User[]>('http://jsonplaceholder.typicode.com/users').subscribe( (u:User[]) => {this.users= u})
 }

 opened(x){
   console.log(x);
 }

 doSomething(tab:TabbarItem){
   console.log(tab);
   this.tabActive = tab;
 }
}
