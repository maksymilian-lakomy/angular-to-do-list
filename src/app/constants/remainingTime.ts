interface Time {
    condition: number | null;
    pre: string;
    post?: string;
    includeNumber: boolean;
}

export const remainingTime: ReadonlyArray<Time> = [
    {
        condition: -1,
        pre: 'Po terminie',
        includeNumber: false
    },
    {
        condition: 0,
        pre: 'Dzisiaj',
        includeNumber: false
    },
    {
        condition: 1,
        pre: 'Pozostał',
        post: 'dzień',
        includeNumber: true
    },
    {
        condition: 4,
        pre: 'Pozostały',
        post: 'dni',
        includeNumber: true
    },
    {
        condition: null,
        pre: 'Pozostało',
        post: 'dni',
        includeNumber: true
    }
]