import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoActions } from '../../store/todo.actions';
import { allTodos, loading } from '../../store/todo.selectors';
import { TodoState } from '../../store/todo.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {

  todos$ = this.store.select(allTodos);
  loading$ = this.store.select(loading);

  constructor(private store: Store<{ todo: TodoState }>) {
    this.store.dispatch(new TodoActions.LoadTodos());
  }

}
