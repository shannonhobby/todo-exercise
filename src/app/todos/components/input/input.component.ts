import { Component } from '@angular/core';
import { TodosService } from '../../services/todo.service';

@Component({
  selector: 'app-main-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  text: string = '';

  constructor(private todoService: TodosService) {}

  updateText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  newTodo(event: Event): void {
    this.todoService.newTodo(this.text);
  }
}
