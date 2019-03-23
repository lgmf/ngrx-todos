import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  @Input() todos: Todo[];

  @Output() finishTodo = new EventEmitter<number>();
  @Output() removeTodo = new EventEmitter<number>();

  trackByFn(index: number, item: Todo) {
    return item.id;
  }

  finish(id: number) {
    this.finishTodo.emit(id);
  }

  remove(id: number) {
    this.removeTodo.emit(id);
  }
}
