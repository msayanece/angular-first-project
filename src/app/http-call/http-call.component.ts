import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-call',
  templateUrl: './http-call.component.html',
  styleUrls: ['./http-call.component.css']
})
export class HttpCallComponent implements OnInit {

  userName = '';
  response: any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onClickSearch(): void{
    this.httpClient.get('https://api.github.com/users/' + this.userName)
      .subscribe((response) => {
        this.response = response;
        console.log(response);
      });
  }

}
