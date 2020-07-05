import { Component, Input, Output, EventEmitter } from '@angular/core';
import { statuses } from 'src/app/constants/statuses';
import { priorities } from 'src/app/constants/priorities';
import { TodoData, Status } from '../classes/todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { language } from 'src/app/constants/language';

@Component({
    selector: 'todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: [
        './todo-form.component.sass'
    ]
})
export class TodoForm {
    @Input() todoData: TodoData;
    @Input() rememberChanges = false;
    @Output() newTodo = new EventEmitter<TodoData>();

    todoForm = new FormGroup({});
    todoFormChanges = false;

    public readonly language = language;

    ngOnInit() {
        this.todoForm.addControl('name', new FormControl(this.todoData.name, [Validators.required, Validators.maxLength(50)]));
        this.todoForm.addControl('description', new FormControl(this.todoData.description));
        this.todoForm.addControl('priority', new FormControl(this.todoData.priority, Validators.required));
        this.todoForm.addControl('status', new FormControl(this.todoData.status, Validators.required));
        this.todoForm.addControl('deadline', new FormControl(this.todoData.deadline));

        this.todoForm.valueChanges.subscribe({ next: this.onChanges.bind(this) });
    }

    onChanges() {
        this.todoFormChanges = true;
    }

    restore(event: MouseEvent) {
        event.preventDefault();
        this.todoForm.patchValue({
            name: this.todoData.name,
            description: this.todoData.description,
            priority: this.todoData.priority,
            status: this.todoData.status,
            deadline: this.todoData.deadline
        });
        this.todoFormChanges = false;
    }

    onSubmit() {
        this.newTodo.emit(this.todoForm.value);
    }

    public changeStatus(status: Status) {
        this.todoData.status = status;
    }

    public statuses = statuses;
    public priorities = priorities;

}