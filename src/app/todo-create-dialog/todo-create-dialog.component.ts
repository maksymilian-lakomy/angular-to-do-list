import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoCreateDialogData } from './todo-create-dialog-data';
import { TodoData, Priority, Todo } from 'src/app/classes/todo';

import { TodoStorageService } from 'src/app/services/todo-storage.service';

import { language } from 'src/app/constants/language';

@Component({
    selector: 'todo-create-dialog',
    templateUrl: './todo-create-dialog.component.html'
})
export class TodoCreateDialogComponent {
    public todoData: TodoData;

    public readonly language = language;

    constructor(private todoStorageService: TodoStorageService, public dialogRef: MatDialogRef<TodoCreateDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: TodoCreateDialogData) {
        this.todoData = {
            name: '',
            status: this.data.status,
            description: '',
            priority: Priority.medium
        }
    }

    public createNewTodo(todo: TodoData) {
        this.todoStorageService.setTodo(new Todo(todo));
        this.dialogRef.close();
    }
}