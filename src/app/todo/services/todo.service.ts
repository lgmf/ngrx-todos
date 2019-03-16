import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  readonly baseUrl = `${environment.apiUrl}/todos`;

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  patch(id: number, todo: Partial<Todo>) {
    return this.http.patch<Todo>(`${this.baseUrl}/${id}`, todo);
  }
}
