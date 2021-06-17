import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent {

  user: User;
  users: User[] = [];

  constructor() { }

  selectUser(user:User){
    this.user = user;
  }

  addUser(form:NgForm){
    this.users.push(form.value);
    form.reset();
  }

  
}
