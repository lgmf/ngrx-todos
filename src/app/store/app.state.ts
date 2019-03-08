import { Todo } from '../models';
import { AppActions } from './app.actions';

export interface AppState {
  todoList: Todo[];
}

const initialState: AppState = {
  todoList: [
    { title: 'Clean the house', done: false },
    { title: 'Take a walk with the dog', done: true }
  ]
};

export function AppReducer(state = initialState, action: AppActions.Actions) {
  switch (action.type) {
    case AppActions.ADD_TODO: {
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload
        ]
      };
    }
    default:
      return state;
  }
}
