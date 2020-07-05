import { Status } from '../classes/todo';

export interface StatusData {
    key: Status;
    value: string;
    customDescription?: string;
}

export const statuses: Array<StatusData> = [
    {
        key: Status.new,
        value: 'Do zrobienia'
    }, {
        key: Status.pending,
        value: 'W toku'
    }, {
        key: Status.finalised,
        value: 'Gotowe',
        customDescription: 'Zakończone'
    }
]