import { Action } from '@ngrx/store';
import { Todo } from '../models/todo.model';

export namespace TodoActions {
  export const LOAD_TODOS = '[Todo] Load Todos';
  export const LOAD_TODOS_SUCCESS = '[Todo] Load Todos Success';
  export const LOAD_TODOS_FAIL = '[Todo] Load Todos Fail';

  export const ADD_TODO = '[App] Add Todo';

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

  export class AddTodo implements Action {
    type = ADD_TODO;
    constructor(public payload: Todo) { }
  }

  export type Actions = AddTodo | LoadTodos | LoadTodosSuccess | LoadTodosFail;
}
