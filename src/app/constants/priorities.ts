import {Priority} from '../classes/todo';

export const priorities: ReadonlyArray<{key: Priority; value: string; color: string}> = [
    {
        key: Priority.low,
        value: 'Niski',
        color: '#00ab44'
    }, {
        key: Priority.medium,
        value: 'Średni',
        color: '#ff9f00'
    }, {
        key: Priority.high,
        value: 'Wysoki',
        color: '#ff0000'
    }
]

export const prioritiesValues: Readonly<Record<Priority, number>> = {
    [Priority.low]: 0,
    [Priority.medium]: 50,
    [Priority.high]: 100
}