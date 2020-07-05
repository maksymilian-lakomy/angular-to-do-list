import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/classes/todo';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TodoStorageService } from '../services/todo-storage.service';
import { StatusData } from 'src/app/constants/statuses';

import { Filter, FilterParam } from 'src/app/pipes/sort-todos.pipe'

import { language } from 'src/app/constants/language';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent {

    constructor(private todoStorageService: TodoStorageService) { }

    public readonly language = language;

    @Input()
    public todos: Array<Todo>;

    @Input()
    public status: StatusData;

    @Input()
    public id: string;

    @Input()
    public connectedListsIds: Array<string>;

    public sortFilters: Array<FilterParam> = [
        {
            filter: 'date',
            active: false
        },
        {
            filter: 'priority',
            active: false
        }
    ]

    public refreshPipe(): void {
        const _temp = this.sortFilters;
        this.sortFilters = [];
        Object.assign(this.sortFilters, _temp);
    }


    public drop(event: CdkDragDrop<Array<Todo>>) {
        if (this.sortFilters.findIndex(_filter => _filter.active === true) !== -1) {
            const _todo = event.item.data as Todo;
            _todo.status = this.status.key;
            this.todoStorageService.setTodo(_todo);
        } else {
            if (event.previousContainer === event.container) {
                moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            } else {
                transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

                (event.previousContainer.data as Array<Todo>).forEach((_todo, i) => {
                    _todo.index = i;
                    this.todoStorageService.setTodo(_todo);
                });
            }
            
            (event.container.data as Array<Todo>).forEach((_todo, i) => {
                _todo.index = i;
                _todo.status = this.status.key;
                this.todoStorageService.setTodo(_todo);
            });
        }
    }
}