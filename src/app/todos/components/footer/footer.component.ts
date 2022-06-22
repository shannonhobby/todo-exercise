import { Component } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { TodosService } from '../../services/todo.service';
import { FilterEnum } from '../../types/filter.enum';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-main-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  incompleteTodos$: Observable<TodoInterface[]>;
  constructor(private todosService: TodosService) {
    this.incompleteTodos$ = todosService.todos$.pipe(
      map((value) => value.filter((todo) => !todo.isComplete))
    );
  }
  clearCompleted(event: Event): void {
    this.todosService.clearCompleted();
  }
  changeFilter(filter: String): void {
    if (filter === 'all') {
      this.todosService.changeFilter(FilterEnum.all);
    } else if (filter === 'active') {
      this.todosService.changeFilter(FilterEnum.active);
    } else {
      this.todosService.changeFilter(FilterEnum.completed);
    }
  }
}
