import { Component } from '@angular/core';
import { User } from './object-input/User.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor() {
    this.user = {
      name: 'Sayan',
      address: 'Kolkata'
    };
  }
}
