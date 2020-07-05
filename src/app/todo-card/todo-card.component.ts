import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { TodoStorageService } from '../services/todo-storage.service';
import { TodoEditDialogComponent } from '../todo-edit-dialog/todo-edit-dialog.component';
import { priorities } from 'src/app/constants/priorities';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'todo-card',
    templateUrl: './todo-card.component.html',
    styleUrls: ['./todo-card.component.sass'],
})
export class TodoCardComponent {
    @Input()
    todo: Todo;

    @Input()
    statusCustomDescription?: string;

    active = false;

    constructor(private todoStorageService: TodoStorageService, public dialog: MatDialog) {
    }

    public getPriorityColor(): string {
        return priorities.find(_priority => _priority.key === this.todo.priority).color;
    }

    public mouseOver(state: boolean) {
        this.active = state;
    }

    public deleteTodo() {
        this.todoStorageService.deleteTodo(this.todo.uuid);
    }

    public editTodo() {
        this.dialog.open(TodoEditDialogComponent, {
            data: {
                todo: this.todo
            },
            minWidth: '50%',
        });
    }
}