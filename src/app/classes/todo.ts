import { v4 } from 'uuid';

import { remainingTime } from '../constants/remainingTime';
import { language } from '../constants/language';

export enum Status {
    new = 'new',
    pending = 'pending',
    finalised = 'finalised'
}

export enum Priority {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface TodoData {
    name: string;
    status: Status;
    description: string;
    deadline?: Date;
    priority: Priority;
    index?: number;
}

interface TodoDataConstructor extends TodoData {
    uuid?: string;
}

export class Todo implements TodoData {
    public uuid: string;

    public name: string;
    public status: Status;
    public description: string;
    public deadline?: Date;
    public priority: Priority;

    public index: number;

    public remainingTime: string;

    constructor({ name, status, description, priority, deadline, uuid, index = 0 }: TodoDataConstructor) {
        this.uuid = uuid ? uuid : v4();
        this.name = name;
        this.status = status;
        this.description = description;
        if (deadline)
            this.deadline = deadline instanceof Date ? deadline : new Date(deadline);

        this.remainingTime = Todo.calculateRemainingTime(this.deadline);

        this.index = index;

        this.priority = priority;
    }

    static calculateRemainingTime(deadline: Date): string {
        let time = undefined;
        if (deadline) {
            const today = new Date();
            const remainingTime = deadline.getTime() - today.getTime();
            time = Math.floor((remainingTime / 1000 / 60 / 60 / 24 + 1));
        }

        const description = remainingTime.find(_description => {
            if (time <= _description.condition || _description.condition == null)
                return _description;
        });

        if (time === undefined)
            return language.undefinedDeadline;

        let final = description.pre;
        if (description.includeNumber)
            final += ` ${time}`;
        if (description.post)
            final += ` ${description.post}`;
        return final;
    }
}

export const firstTimeMockUp: Readonly<Array<Todo>> = [
    new Todo({
        name: 'Twoje pierwsze todo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        status: Status.new,
        priority: Priority.high,
        index: 0
    }),    
    new Todo({ 
        name: 'Twoje trzecie todo', 
        description: 'Fusce sapien libero, efficitur sit amet consequat quis, sollicitudin finibus lorem.', 
        status: Status.pending, 
        deadline: new Date('2020-07-08T22:00:00.000Z'),
        priority: Priority.medium, 
        index: 0
    }),    
    new Todo({ 
        name: 'Twoje czwarte todo', 
        description: 'Sed pulvinar nunc eu nulla iaculis dapibus.', 
        status: Status.pending, 
        priority: Priority.low, 
        index: 1
    }),
    new Todo({ 
        name: 'Twoje drugie todo', 
        description: 'Morbi dignissim sed ex id pulvinar.', 
        status: Status.pending, 
        deadline: new Date('2020-07-12T22:00:00.000Z'),
        priority: Priority.high, 
        index: 2
    }),
    new Todo({ 
        name: 'Twoje piąte todo',
        description: 'Aliquam pellentesque magna id ante semper faucibus.',
        status: Status.finalised,
        priority: Priority.low,
        index: 0 
    })
]