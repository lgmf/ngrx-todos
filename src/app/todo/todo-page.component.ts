import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { filter, map, take, takeUntil, switchMap } from 'rxjs/operators';
import { AddTodoDialogComponent } from './components';
import { Todo } from './models/todo.model';
import { allTodos, loading, nextId, TodoActions, TodoState, undoneTodos, showDone } from './store';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoPageComponent implements OnInit, OnDestroy {

  showDone$ = this.store.select(showDone);
  loading$ = this.store.select(loading);
  todos$ = this.showDone$.pipe(
    switchMap(show => show ? this.store.select(allTodos) : this.store.select(undoneTodos))
  );
  destroyed$ = new Subject<void>();

  constructor(
    private store: Store<{ todo: TodoState }>,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.store.dispatch(new TodoActions.LoadTodos());
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
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
    this.store.dispatch(new TodoActions.ShowDone(checked));
  }

  removeTodo(id: number) {
    this.store.dispatch(new TodoActions.RemoveTodo(id));
  }

  private addTodo(todo: Todo) {
    this.store.select(nextId)
      .pipe(
        map(id => {
          const newTodo: Todo = {
            id,
            ...todo
          };
          return newTodo;
        }),
        take(1)
      )
      .subscribe(newTodo => this.store.dispatch(new TodoActions.AddTodo(newTodo)));
  }

}
