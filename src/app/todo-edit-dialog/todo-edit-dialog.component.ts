import { Component, Inject } from '@angular/core';
import { TodoStorageService } from 'src/app/services/todo-storage.service';

import { TodoEditDialogData } from './todo-edit-dialog-data';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from 'src/app/classes/todo';

import { language } from 'src/app/constants/language';

@Component({
    selector: 'todo-edit-dialog',
    templateUrl: './todo-edit-dialog.component.html'
})
export class TodoEditDialogComponent {
    public todoData: Todo;

    public readonly language = language;

    constructor(private todoStorageService: TodoStorageService,
        public dialogRef: MatDialogRef<TodoEditDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: TodoEditDialogData) {
        this.todoData = this.data.todo;
    }

    public saveTodo(todo: Todo) {
        todo.uuid = this.todoData.uuid;
        this.todoStorageService.setTodo(new Todo(todo));
        this.dialogRef.close();
    }
}