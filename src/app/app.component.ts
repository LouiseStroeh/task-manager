import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LabeledTasks, Task } from '../types/task.type';
import { TaskComponent } from './task/task.component';
import { ButtonComponent } from './button/button.component';
import { SubheadingComponent } from './subheading/subheading.component';
import { ListItemComponent } from './list-item/list-item.component';
import groupBy from 'lodash.groupby';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TaskComponent,
    ButtonComponent,
    SubheadingComponent,
    ListItemComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'Task Manager';
  tasks: WritableSignal<Array<Task>> = signal([]);
  labeledTasks: Signal<Array<LabeledTasks>> = computed(() => {
    const groupedTasks = groupBy(this.tasks(), 'status');
    const order = ['todo', 'in-progress', 'completed'];
    const byOrder = (a: string, b: string) =>
      order.indexOf(a) - order.indexOf(b);
    const toLabeledTasks = (key: string) => ({
      heading: key.replace('-', ' '),
      tasks: groupedTasks[key],
    });

    return Object.keys(groupedTasks).sort(byOrder).map(toLabeledTasks);
  });

  get noTasks() {
    return this.labeledTasks().length === 0;
  }

  trackByHeading(index: number, labeledTasks: LabeledTasks) {
    return labeledTasks.heading;
  }

  add(name: string) {
    if (name === '') {
      return;
    }

    this.tasks.update((currentTasks) => {
      return [
        {
          id: Math.random().toString(36).substring(2, 9),
          name,
          description: '',
          status: 'todo',
          creationDate: new Date().toLocaleDateString(),
        },
        ...currentTasks,
      ];
    });
  }

  updateTask(updatedTask: Task) {
    this.tasks.update((currentTasks) =>
      currentTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  }

  remove(removedTask: Task) {
    this.tasks.update((currentTasks) =>
      currentTasks.filter((task) => task.id !== removedTask.id)
    );
  }
}
