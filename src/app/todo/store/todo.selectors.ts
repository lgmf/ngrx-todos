import { createFeatureSelector, createSelector } from '@ngrx/store';
import { entityToArray } from 'src/app/utils/entity-helper';
import { TodoState } from './todo.state';

const todoState = createFeatureSelector('todo');

export const allTodos = createSelector(
  todoState,
  (state: TodoState) => entityToArray(state.todos)
);

export const undoneTodos = createSelector(
  todoState,
  (state: TodoState) => entityToArray(state.todos).filter(t => !t.done)
);

export const nextId = createSelector(
  allTodos,
  todos => todos.length + 1
);

export const loading = createSelector(
  todoState,
  (state: TodoState) => state.loading
);

export const showDone = createSelector(
  todoState,
  (state: TodoState) => state.showDone
);
