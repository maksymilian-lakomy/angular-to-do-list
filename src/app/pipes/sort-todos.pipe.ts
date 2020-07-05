import { Pipe, PipeTransform } from '@angular/core';
import { Todo, Status } from 'src/app/classes/todo';
import { prioritiesValues } from 'src/app/constants/priorities';

export type Filter = 'order' | 'date' | 'priority';
export interface FilterParam {
    filter: Filter;
    active: boolean;
}

@Pipe({ name: 'sortTodos' })
export class SortTodos implements PipeTransform {
    transform(value: Array<Todo>, filters: Array<FilterParam> = []): Array<Todo> {
        return value.sort((x, y) => {
            const _filters = filters.filter(_filter => _filter.active).map(_filter => _filter.filter);
            const conditions: Array<number> = [];
            if (_filters.length === 0 || _filters.includes('order'))
                conditions.push(x.index - y.index);
            if (_filters.includes('date')) {
                const xDeadline = x.deadline ? x.deadline.getTime() : 0;
                const yDeadline = y.deadline ? y.deadline.getTime() : 0;
                conditions.push(yDeadline - xDeadline);
            }
            if (_filters.includes('priority'))
                conditions.push(prioritiesValues[y.priority] - prioritiesValues[x.priority]);
            return conditions.reduce((previous, current) => previous || current);
        })
    }
}