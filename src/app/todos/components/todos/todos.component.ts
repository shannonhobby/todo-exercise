import { Component } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { TodosService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-main-todos',
  templateUrl: './todos.component.html',
})
export class TodosComponent {
  todos$: Observable<TodoInterface[]>;
  visibleTodos$: Observable<TodoInterface[]>;

  constructor(private todosService: TodosService) {
    this.todos$ = this.todosService.todos$;

    this.visibleTodos$ = combineLatest(
      this.todosService.todos$,
      this.todosService.filter$
    ).pipe(
      map(([todos, filter]: [TodoInterface[], FilterEnum]) => {
        if (filter === FilterEnum.active) {
          return todos.filter((todo) => !todo.isComplete);
        } else if (filter === FilterEnum.completed) {
          return todos.filter((todo) => todo.isComplete);
        }
        return todos;
      })
    );
  }
}
