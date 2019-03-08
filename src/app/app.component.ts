import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './models';
import { AppState } from './store/app.state';
import { AppActions } from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public todos$: Observable<Todo[]> = this.store.select(({ app }) => app.todoList);

  constructor(private store: Store<{ app: AppState }>) { }

  addTodo(title: string) {
    const todo: Todo = {
      title,
      done: false
    };

    this.store.dispatch(new AppActions.AddTodo(todo));
  }
}
