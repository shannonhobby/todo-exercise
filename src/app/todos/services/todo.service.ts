import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoInterface } from '../types/todo.interface';

@Injectable()
export class TodosService {
  todos$ = new BehaviorSubject<TodoInterface[]>([
    { todo: 'Complete online JavaScript course', isComplete: true },
    { todo: 'Jog around the park 3x', isComplete: false },
    { todo: '10 minutes meditation', isComplete: false },
    { todo: 'Read for 1 hour', isComplete: false },
    { todo: 'Pick up groceries', isComplete: false },
    { todo: 'Complete Todo App on Frontend Mentor', isComplete: false },
  ]);

  newTodo(text: string): void {
    const newTodo = { todo: text, isComplete: false };
    const updatedTodos = [...this.todos$.getValue(), newTodo];
    this.todos$.next(updatedTodos);
  }
}
