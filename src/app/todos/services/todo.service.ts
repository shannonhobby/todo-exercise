import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { FilterEnum } from '../types/filter.enum';
import { TodoInterface } from '../types/todo.interface';

@Injectable()
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([
    { todo: 'Complete online JavaScript course', isComplete: false, id: '1' },
    { todo: 'Jog around the park 3x', isComplete: false, id: '2' },
    { todo: '10 minutes meditation', isComplete: false, id: '3' },
    { todo: 'Read for 1 hour', isComplete: false, id: '4' },
    { todo: 'Pick up groceries', isComplete: false, id: '5' },
    { todo: 'Complete Todo App on Frontend Mentor', isComplete: true, id: '6' },
  ]);
  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.all);

  newTodo(text: string): void {
    const newTodo = {
      todo: text,
      isComplete: false,
      id: (Math.random() + 1).toString(36).substring(7),
    };
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }

  clearCompleted(): void {
    const updatedTodos = this.todos$
      .getValue()
      .filter((todos) => !todos.isComplete);
    this.todos$.next(updatedTodos);
  }
  changeFilter(filter: FilterEnum): void {
    this.filter$.next(filter);
  }
  checkTodo(id: string, completed: boolean): void {
    const updatedTodos = this.todos$.getValue();
    for (let i = 0; i < updatedTodos.length; i++) {
      if (updatedTodos[i].id === id) {
        updatedTodos[i].isComplete = completed;
      }
    }

    this.todos$.next(updatedTodos);
  }
}
