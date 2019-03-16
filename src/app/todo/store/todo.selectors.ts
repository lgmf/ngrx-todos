import { createFeatureSelector, createSelector } from '@ngrx/store';
import { entityToArray } from 'src/app/utils/entity-helper';
import { TodoState } from './todo.state';

const todoState = createFeatureSelector('todo');

export const allTodos = createSelector(todoState, (state: TodoState) => entityToArray(state.todos));

export const loading = createSelector(todoState, (state: TodoState) => state.loading);
