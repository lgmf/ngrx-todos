import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  templateUrl: './add-todo-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./add-todo-dialog.component.scss']
})
export class AddTodoDialogComponent {

  @HostBinding('class.modal')
  hostClass = true;

  form = this.fb.group({
    title: ['', Validators.required],
    finishDate: ['', Validators.required],
    done: [false]
  });

  constructor(
    public dialogRef: MatDialogRef<AddTodoDialogComponent>,
    private fb: FormBuilder
  ) { }

  addTodo() {
    if (this.form.invalid) {
      return;
    }

    const todo = this.form.value;
    this.dialogRef.close(todo);
  }
}
