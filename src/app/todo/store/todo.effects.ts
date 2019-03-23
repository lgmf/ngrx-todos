import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { TodoService } from '../services/todo.service';
import { TodoActions } from './todo.actions';

@Injectable()
export class TodoEffects {
  @Effect()
  loadTodos$ = this.actions$.pipe(
    ofType(TodoActions.LOAD_TODOS),
    switchMap(_ =>
      this.todoService.list().pipe(
        map(todos => new TodoActions.LoadTodosSuccess(todos)),
        catchError(error => of(new TodoActions.LoadTodosFail(error.message)))
      )
    )
  );

  @Effect()
  addTodo$ = this.actions$.pipe(
    ofType(TodoActions.ADD_TODO),
    switchMap((action: TodoActions.AddTodo) =>
      this.todoService.save(action.payload).pipe(
        map(next => new TodoActions.AddTodoSuccess(next))
      )
    )
  );

  @Effect()
  patchTodo$ = this.actions$.pipe(
    ofType(TodoActions.FINISH_TODO),
    switchMap((action: TodoActions.FinishTodo) =>
      this.todoService.patch(action.payload, { done: true }).pipe(
        map(updated => new TodoActions.FinishTodoSuccess(updated))
      )
    )
  );

  @Effect()
  deleteTodo$ = this.actions$.pipe(
    ofType(TodoActions.REMOVE_TODO),
    switchMap((action: TodoActions.RemoveTodo) =>
      this.todoService.delete(action.payload).pipe(
        map(_ => new TodoActions.RemoveTodoSuccess(action.payload))
      )
    )
  );

  @Effect({ dispatch: false })
  showDone$ = this.actions$.pipe(
    ofType(TodoActions.SHOW_DONE),
    map((action: TodoActions.ShowDone) =>
      this.todoService.persistShowDoneOption(action.payload)
    )
  );

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }
}
