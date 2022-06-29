import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as components from './components';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent,
    components.DashboardComponent,
    components.HeaderComponent,
    TodoListComponent],
  imports: [BrowserModule,
    AppRoutingModule,
  HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
