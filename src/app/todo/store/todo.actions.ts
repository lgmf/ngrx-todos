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

  export const REMOVE_TODO = '[Todo] Remove Todo';
  export const REMOVE_TODO_SUCCESS = '[Todo] Remove Todo Success';

  export const SHOW_DONE = '[Todo] Show Done';

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

  export class RemoveTodo implements Action {
    type = REMOVE_TODO;
    constructor(public payload: number) { }
  }

  export class RemoveTodoSuccess implements Action {
    type = REMOVE_TODO_SUCCESS;
    constructor(public payload: number) { }
  }

  export class ShowDone implements Action {
    type = SHOW_DONE;
    constructor(public payload: boolean) { }
  }

  export type Actions =
    | LoadTodos
    | LoadTodosSuccess
    | LoadTodosFail
    | FinishTodo
    | FinishTodoSuccess
    | AddTodo
    | AddTodoSuccess
    | RemoveTodo
    | RemoveTodoSuccess
    | ShowDone;
}
