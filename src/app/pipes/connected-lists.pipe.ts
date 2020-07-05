import { Pipe, PipeTransform } from '@angular/core';
import { Status } from 'src/app/classes/todo';
import { StatusData } from 'src/app/constants/statuses';


@Pipe({ name: 'connectedLists' })
export class ConnectedLists implements PipeTransform {
    transform(value: Status, statuses: Array<StatusData>): Array<string> {
        return statuses.filter(_status => _status.key !== value).map(_status => _status.key + 'List');
    }
}