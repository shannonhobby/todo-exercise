import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from '../../services/todo.service';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-main-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos$: Observable<TodoInterface[]>;
  constructor(private todosService: TodosService) {
    this.todos$ = this.todosService.todos$;
  }
}
