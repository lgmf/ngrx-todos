import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialog, MatCheckboxChange } from '@angular/material';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { Todo } from '../../models/todo.model';
import { TodoActions } from '../../store/todo.actions';
import { allTodos, loading, nextId, undoneTodos } from '../../store/todo.selectors';
import { TodoState } from '../../store/todo.state';
import { AddTodoDialogComponent } from '../add-todo-dialog/add-todo-dialog.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnDestroy {

  todos$ = this.store.select(undoneTodos);
  loading$ = this.store.select(loading);
  destroyed$ = new Subject<void>();

  constructor(
    private store: Store<{ todo: TodoState }>,
    private dialog: MatDialog
  ) {
    this.store.dispatch(new TodoActions.LoadTodos());
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  trackByFn(index: number, item: Todo) {
    return item.id;
  }

  setTodoAsDone(id: number) {
    this.store.dispatch(new TodoActions.FinishTodo(id));
  }

  showAddTodoDialog() {
    const addTodoRef = this.dialog.open(AddTodoDialogComponent, {
      width: '450px',
      height: '450px'
    });

    addTodoRef.afterClosed()
      .pipe(
        filter(Boolean),
        take(1),
        takeUntil(this.destroyed$)
      )
      .subscribe(todo => this.addTodo(todo));
  }

  showDoneTodos({ checked }: MatCheckboxChange) {
    this.todos$ = checked ? this.store.select(allTodos) : this.store.select(undoneTodos);
  }

  removeTodo(id: number) {
    this.store.dispatch(new TodoActions.RemoveTodo(id));
  }

  private addTodo(todo: Todo) {
    this.store.select(nextId)
      .pipe(take(1))
      .subscribe(id => {
        const newTodo: Todo = {
          id,
          ...todo
        };

        this.store.dispatch(new TodoActions.AddTodo(newTodo));
      });
  }
}
