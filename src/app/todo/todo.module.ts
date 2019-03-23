import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatDialogModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AddTodoDialogComponent, TodoListComponent } from './components';
import { TodoEffects } from './store/todo.effects';
import { TodoReducer } from './store/todo.state';
import { TodoPageComponent } from './todo-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  }
];

@NgModule({
  declarations: [
    TodoListComponent,
    AddTodoDialogComponent,
    TodoPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('todo', TodoReducer),
    EffectsModule.forFeature([TodoEffects])
  ],
  entryComponents: [
    AddTodoDialogComponent
  ]
})
export class TodoModule { }
