import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from 'src/app/todos/components/to-do/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodosService } from './services/todos.service';
import { MainComponent } from './components/main/main.component';
import { TodoComponent } from './components/lists/todo.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [
    TodosComponent,
    HeaderComponent,
    MainComponent,
    TodoComponent,
    FooterComponent,
    FormComponent,
    HomeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
