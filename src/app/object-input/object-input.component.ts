import { Component, Input, OnInit } from '@angular/core';
import { User } from './User.model';

@Component({
  selector: 'app-object-input',
  templateUrl: './object-input.component.html',
  styleUrls: ['./object-input.component.css']
})
export class ObjectInputComponent implements OnInit {

  @Input()
  user!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
