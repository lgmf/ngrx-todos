import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDatepickerModule, MatDialogModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddTodoDialogComponent, TodoListComponent } from './components';
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
    TodoListComponent,
    AddTodoDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todo', TodoReducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  entryComponents: [
    AddTodoDialogComponent
  ]
})
export class TodoModule { }
