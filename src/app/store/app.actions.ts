import { Action } from '@ngrx/store';
import { Todo } from '../models';

export namespace AppActions {
  export const ADD_TODO = '[App] Add Todo';

  export class AddTodo implements Action {
    type = ADD_TODO;

    constructor(public payload: Todo) { }
  }

  export type Actions = AddTodo;
}


