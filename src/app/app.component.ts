import {Component, OnInit} from '@angular/core';

import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  items: any[];
  asyncString = this.httpService.getData();

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getData().subscribe(
      (data) => console.log(data)
    );
  }

  onClick(username: string, email: string) {
    this.httpService.sendData({username: username, email: email}).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onGetData() {
    this.httpService.getOwnData().subscribe(
      data => {
        const myArray = [];
        for(let key in data) {
          myArray.push(data[key]);
        }
        this.items = myArray;
      }
    );
  }
}
