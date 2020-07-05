import { Pipe, PipeTransform } from '@angular/core';
import { Todo, Status } from 'src/app/classes/todo';


@Pipe({ name: 'todosByStatus' })
export class TodosByStatus implements PipeTransform {
    transform(value: Array<Todo>, status: Status): Array<Todo> {
        return value.filter(todo => todo.status === status);
    }
}