import { Component, Input, inject } from '@angular/core';
import { TaskItem } from '../task-item';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  template: `
    <div class="task-item">
      <div class="left">
        <span
          class="complete-circle"
          [style.background-color]="taskItem.completed ? '#46FFF4' : 'none'"
          (click)="toggleComplete(taskItem.id)"
        ></span>
        <p
          class="task-text"
          [style.text-decoration]="taskItem.completed ? 'line-through' : 'none'"
        >
          {{ taskItem.title }}
        </p>
      </div>
      <button class="delete" (click)="deleteItem(taskItem.id)">
        <img src="/assets/Delete.svg" alt="delete" />
      </button>
    </div>
  `,
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() taskItem!: TaskItem;
  taskService: TaskService = inject(TaskService);

  toggleComplete(id: number) {
    this.taskService.completeTask(id);
  }

  deleteItem(id: number) {
    this.taskService.deleteTask(id);
  }
}
