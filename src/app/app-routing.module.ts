import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ListTasksScreenComponent } from './components/list-tasks-screen/list-tasks-screen.component';
import { EditTaskScreenComponent } from './components/edit-task-screen/edit-task-screen.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeScreenComponent
  },
  {
    path:'list',
    component: ListTasksScreenComponent
  },
  {
    path:'edit-task/:id',
    component: EditTaskScreenComponent
  },
  {
    path: '**',
    redirectTo:'/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
