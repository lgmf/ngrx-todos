
import { arrayToEntity, EntityOf } from 'src/app/utils/entity-helper';
import { Todo } from '../models/todo.model';
import { TodoActions } from './todo.actions';

export interface TodoState {
  loading: boolean;
  todos: EntityOf<Todo>;
}

const initialState: TodoState = {
  loading: false,
  todos: {}
};

export function TodoReducer(state = initialState, action: TodoActions.Actions) {
  switch (action.type) {

    case TodoActions.LOAD_TODOS: {
      return {
        ...state,
        loading: true
      };
    }

    case TodoActions.LOAD_TODOS_SUCCESS: {
      const { payload } = action as TodoActions.LoadTodosSuccess;
      return {
        ...state,
        loading: false,
        todos: arrayToEntity(payload, 'id')
      };
    }

    case TodoActions.LOAD_TODOS_FAIL: {
      return {
        ...state,
        loading: false
      };
    }

    case TodoActions.FINISH_TODO_SUCCESS: {
      const { payload } = action as TodoActions.FinishTodoSuccess;
      const updated = payload;

      return {
        ...state,
        todos: {
          ...state.todos,
          [updated.id]: updated
        }
      };
    }

    case TodoActions.ADD_TODO_SUCCESS: {
      const { payload } = action as TodoActions.AddTodoSuccess;
      const todo = payload;

      return {
        ...state,
        todos: {
          ...state.todos,
          [todo.id]: todo
        }
      };
    }

    case TodoActions.REMOVE_TODO_SUCCESS: {
      const { payload } = action as TodoActions.RemoveTodoSuccess;
      const index = payload;
      const todos = { ...state.todos };
      delete todos[index];

      return { ...state, todos };
    }
  }

  return state;
}

