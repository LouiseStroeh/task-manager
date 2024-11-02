import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../types/task.type';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '../select/select.component';
import { ButtonComponent } from '../button/button.component';
import { IconTrashCanComponent } from '../icons/icon-trash-can/icon-trash-can.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  imports: [
    CommonModule,
    FormsModule,
    SelectComponent,
    ButtonComponent,
    IconTrashCanComponent,
    IconButtonComponent,
  ],
})
export class TaskComponent {
  isEditable = false;
  statuses = [
    { value: 'todo', name: 'Todo' },
    { value: 'in-progress', name: 'In progress' },
    { value: 'completed', name: 'Completed' },
  ];

  @Input() task!: Task;
  @Output() remove = new EventEmitter<Task>();
  @Output() updateStatus = new EventEmitter<Task>();
}
