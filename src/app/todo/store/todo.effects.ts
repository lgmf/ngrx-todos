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

  constructor(
    private actions$: Actions,
    private todoService: TodoService
  ) { }
}
