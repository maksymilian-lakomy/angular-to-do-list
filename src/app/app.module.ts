import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoCreateDialogComponent } from './todo-create-dialog/todo-create-dialog.component';
import { TodoEditDialogComponent } from './todo-edit-dialog/todo-edit-dialog.component';

import { TodoForm } from './todo-form/todo-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TodosByStatus } from './pipes/todos-by-status.pipe';
import { SortTodos } from './pipes/sort-todos.pipe';
import { ConnectedLists } from './pipes/connected-lists.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    TodoListComponent,
    TodoCreateDialogComponent,
    TodoEditDialogComponent,
    TodoForm,
    TodosByStatus,
    ConnectedLists,
    SortTodos
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
