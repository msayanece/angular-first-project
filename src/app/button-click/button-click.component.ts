import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-click',
  templateUrl: './button-click.component.html',
  styleUrls: ['./button-click.component.css']
})
export class ButtonClickComponent implements OnInit {


  isClicked = false;
  clickMeButtonText = 'Click to show';

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(): void {
    this.isClicked = !this.isClicked;
    if (this.isClicked){
      this.clickMeButtonText = 'Click to hide';
    }else{
      this.clickMeButtonText = 'Click to show';
    }
  }
}
