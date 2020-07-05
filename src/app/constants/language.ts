import {Filter} from '../pipes/sort-todos.pipe';

export type Keys = 'createNewCard' | 'undefinedDeadline' | 'sortingHeadline';

export type FormKeys = 'unsavedChanges' | 'restore' | 'nameInput' | 'nameInputPlaceholder' | 'statusInput' | 'descriptionInput' | 'descriptionInputPlaceholder' | 'priorityInput' | 'deadlineInput' | 'submitInput';

export type DialogHeadlineKeys = 'newCardDialog' | 'editCardDialog';

export const language: Readonly<Record<Keys | FormKeys | DialogHeadlineKeys | Filter, string>> = {
    createNewCard: 'Dodaj nową kartę',
    undefinedDeadline: 'Nie określono',
    sortingHeadline: 'Sortuj według:',
    order: 'własnej kolejności',
    date: 'terminu',
    priority: 'priorytetu',

    newCardDialog: 'Dodaj nową kartę',
    editCardDialog: 'Edytuj kartę',

    unsavedChanges: 'Masz niezapisane zmiany!',
    restore: 'Cofnij zmiany',
    nameInput: 'Tytuł',
    nameInputPlaceholder: 'Nadaj tytuł tej karcie',
    statusInput: 'Stan',
    descriptionInput: 'Szczegółowy opis',
    descriptionInputPlaceholder: 'Dodaj szczegółowy opis',
    priorityInput: 'Priorytet',
    deadlineInput: 'Termin',
    submitInput: 'Zapisz'
}