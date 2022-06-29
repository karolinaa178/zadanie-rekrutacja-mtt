import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as components from './components';

const routes: Routes =
    [
        { path: '', component: components.DashboardComponent },
        { path: 'todo-list', component: components.TodoListComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
