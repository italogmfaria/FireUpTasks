import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './todos/components/home/home.component';
import { FormComponent } from './todos/components/form/form.component';
import { TodosComponent } from './todos/components/to-do/todos.component';


const routes: Routes = [
  {path: 'home',component: HomeComponent},
  {path: 'form',component: FormComponent},
  {path: 'main',component: TodosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
