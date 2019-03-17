import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export namespace TodoActions {
  export const LOAD_TODOS = '[Todo] Load Todos';
  export const LOAD_TODOS_SUCCESS = '[Todo] Load Todos Success';
  export const LOAD_TODOS_FAIL = '[Todo] Load Todos Fail';

  export const FINISH_TODO = '[Todo] Finish Todo';
  export const FINISH_TODO_SUCCESS = '[Todo] Finish Todo Success';

  export const ADD_TODO = '[Todo] Add Todo';
  export const ADD_TODO_SUCCESS = '[Todo] Add Todo Success';

  export class LoadTodos {
    type = LOAD_TODOS;
  }

  export class LoadTodosSuccess implements Action {
    type = LOAD_TODOS_SUCCESS;
    constructor(public payload: Todo[]) { }
  }

  export class LoadTodosFail implements Action {
    type = LOAD_TODOS_FAIL;
    constructor(public payload: string) { }
  }

  export class FinishTodo {
    type = FINISH_TODO;

    constructor(public payload: number) { }
  }

  export class FinishTodoSuccess {
    type = FINISH_TODO_SUCCESS;

    constructor(public payload: Todo) { }
  }

  export class AddTodo implements Action {
    type = ADD_TODO;
    constructor(public payload: Todo) { }
  }

  export class AddTodoSuccess implements Action {
    type = ADD_TODO_SUCCESS;
    constructor(public payload: Todo) { }
  }

  export type Actions =
    | LoadTodos
    | LoadTodosSuccess
    | LoadTodosFail
    | FinishTodo
    | FinishTodoSuccess
    | AddTodo
    | AddTodoSuccess;
}
