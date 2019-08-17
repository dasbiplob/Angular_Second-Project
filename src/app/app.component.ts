import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { Input } from '@angular/compiler/src/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Second-Project';
  user: User;
  inputText: String = "Intial Value";

  constructor(){
    this.user = new User();
    this.user.name = "Foo Bar!!!";
    this.user.designation = "Software Engineer";
    this.user.address = "1000 street city state";
    this.user.phone = [
      '123-9876-3780',
      '123-9876-5327'
    ];

  }
}
