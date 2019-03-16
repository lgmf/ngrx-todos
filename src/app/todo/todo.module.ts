import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoEffects } from './store/todo.effects';
import { TodoReducer } from './store/todo.state';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
];

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todo', TodoReducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoModule { }
