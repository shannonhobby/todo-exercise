import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { InputComponent } from './components/input/input.component';
import { MainComponent } from './components/main/main.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodosService } from './services/todo.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
];
@NgModule({
  declarations: [
    MainComponent,
    InputComponent,
    TodosComponent,
    TodoComponent,
    FooterComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule],
  providers: [TodosService],
  bootstrap: [],
})
export class TodosModule {}
