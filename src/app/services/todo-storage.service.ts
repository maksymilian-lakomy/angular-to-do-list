import { Todo, firstTimeMockUp, TodoData } from 'src/app/classes/todo'
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoStorageService {

    public todos: Array<Todo>;
    
    constructor() {
        this.todos = this.getTodos();
    }

    public setTodo(todo: Todo) {
        const todos = this.getTodos();
        const index = todos.findIndex(_todo => _todo.uuid === todo.uuid);
        index === -1 ? todos.push(todo) : todos[index] = todo;
        localStorage.setItem('storage', JSON.stringify(todos));
        this.todos = todos;
    } 

    public deleteTodo(uuid: string) {
        const index = this.todos.findIndex(todo => todo.uuid === uuid);
        if (index !== -1)
            this.todos.splice(index, 1);
        else
            console.error(`There is no todo with uuid ${uuid}!`);
        localStorage.setItem('storage', JSON.stringify(this.todos));
    }

    public getTodos(): Array<Todo> {
        const visited = localStorage.getItem('visited');
        if (visited == null || visited === `${false}`) {
            localStorage.setItem('storage', JSON.stringify(firstTimeMockUp));
            localStorage.setItem('visited', `${true}`);
        }

        const storage = JSON.parse(localStorage.getItem('storage')) as Array<TodoData>;
        return storage.map(todoData => new Todo(todoData)); 
    }
}
