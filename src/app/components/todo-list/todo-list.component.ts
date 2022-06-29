import { Component, OnInit } from '@angular/core';
import {TodoService} from "../../service/todo.service";
import {TodoItem} from "../../interfaces";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoService]
})
export class TodoListComponent implements OnInit {
  elementLists: TodoItem[] = [];
  statuses: any[] = [];
  key: any = 'status';

  constructor(private todoService: TodoService) {}


  ngOnInit(): void {
    this.getListElements();
  }

  getListElements(): void {
    this.todoService.getElements().subscribe((result) => {
      this.elementLists = result;
      if (result){
        this.countStatuses();
      }
    })
  }

  countStatuses(): void {
    this.elementLists.forEach((el) => {
      if(this.statuses.some((val)=>{ return val[this.key] == el.status})) {
        this.statuses.forEach((x) => {
          if(x[this.key] === el.status) {
            x['occurrence']++
          }
        })
      } else {
        let a: any = {}
        a[this.key] = el.status;
        a['occurrence'] = 1;
        this.statuses.push(a);
      }
    })
    console.log(this.statuses);
  }

}
