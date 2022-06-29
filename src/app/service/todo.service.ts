import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoItem} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getElements(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('https://gorest.co.in/public/v2/todos');
  }

}
