import { Component, inject } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskItem } from '../task-item';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks-listing',
  standalone: true,
  imports: [TaskItemComponent],
  template: `
    <section class="todo">
      @for (task of tasks; track task.id) { @if (task.completed === false) {
      <app-task-item [taskItem]="task"></app-task-item>
      } }
    </section>
    <section class="completed">
      <div class="info">
        <p>Completed</p>
      </div>

      <div class="completed-items">
        @for (task of tasks; track task.id) { @if (task.completed === true) {
        <app-task-item [taskItem]="task"></app-task-item>
        } }
      </div>
    </section>
  `,
  styleUrl: './tasks-listing.component.css',
})
export class TasksListingComponent {
  tasks: TaskItem[] = [];
  taskService: TaskService = inject(TaskService);

  constructor() {
    this.tasks = this.taskService.getAllTasks();
  }
}
