import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ngoninit-passing-param',
  templateUrl: './ngoninit-passing-param.component.html',
  styleUrls: ['./ngoninit-passing-param.component.css']
})
export class NgoninitPassingParamComponent implements OnInit {

  user: any;
  @Input('add') address = '';
  @Input() name = '';

  constructor() { }

  ngOnInit(): void {
    this.user = {
      name: this.name,
      address: this.address
    }
  }

}
