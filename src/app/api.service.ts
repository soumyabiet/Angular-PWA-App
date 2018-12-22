import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


export interface Item {
  name: string;
  description: string;
  url: string;
  html: string;
  markdown: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private dataURL: string = "https://www.techiediaries.com/api/data.json";
  constructor( private http: HttpClient) { }

  fetchData() : Observable<Item[]> {
    return <Observable<Item[]>> this.http.get(this.dataURL);
  }

}
