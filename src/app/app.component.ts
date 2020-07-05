import { Component } from '@angular/core';
import { TodoStorageService } from 'src/app/services/todo-storage.service';
import { Status } from 'src/app/classes/todo';
import { TodoCreateDialogComponent } from 'src/app/todo-create-dialog/todo-create-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { statuses } from 'src/app/constants/statuses';

import { language } from 'src/app/constants/language';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    public readonly language = language;
    public statuses = statuses;

    title = 'angular-to-do-list';

    constructor(public todoStorageService: TodoStorageService, public dialog: MatDialog) { }

    public openCreateTodoDialog(status: Status) {
        this.dialog.open(TodoCreateDialogComponent, {
            data: {
                status: status
            },
            minWidth: '50%'
        });
    }
}
