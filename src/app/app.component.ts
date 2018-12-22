import { Component, OnInit } from '@angular/core';

import { ApiService, Item } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'pwademo';
  public items: Array<Item>;

  constructor( private apiService: ApiService) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.fetchData()
        .subscribe((data : Array<Item>) => {
          console.log( data );
          this.items = data;
        })
  }

}
