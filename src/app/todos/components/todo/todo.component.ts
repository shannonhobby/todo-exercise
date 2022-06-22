import { Component, Input } from '@angular/core';
import { TodosService } from '../../services/todo.service';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-main-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input('todo') todoProps: TodoInterface;

  constructor(private todosService: TodosService) {}

  checkTodo(id: string, completed: boolean): void {
    this.todosService.checkTodo(id, completed);
  }
}
