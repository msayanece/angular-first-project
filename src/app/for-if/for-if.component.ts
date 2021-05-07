import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-if',
  templateUrl: './for-if.component.html',
  styleUrls: ['./for-if.component.css']
})
export class ForIfComponent implements OnInit {

  user: any;

  constructor() {
    this.user = {
      name: 'Sayan Mukherjee',
      address: '57/1 Belgachiya, Kolkata - 700003',
      phone: [
        '9874563210',
        '8956231470'
      ]
    };
  }

  ngOnInit(): void {
  }

}
