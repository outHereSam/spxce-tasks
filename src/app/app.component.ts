import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksListingComponent } from './tasks-listing/tasks-listing.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { TaskItem } from './task-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TasksListingComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'spxce-tasks';
  todoValue = '';
  taskList: TaskItem[] = [];
  nextTaskId = 0;
  taskService: TaskService = inject(TaskService);

  constructor() {}

  addTask() {
    this.taskList = this.taskService.getAllTasks();
    this.nextTaskId = this.taskList.length + 1;
    if (this.todoValue) {
      this.taskService.addNewTask({
        id: this.nextTaskId,
        title: this.todoValue,
        completed: false,
      });
      this.todoValue = '';
    }
    console.log(this.taskService.getAllTasks());
  }

  addTaskOnEnter(event: KeyboardEvent) {
    this.taskList = this.taskService.getAllTasks();
    this.nextTaskId = this.taskList.length + 1;
    if (this.todoValue) {
      if (event.key === 'Enter') {
        this.taskService.addNewTask({
          id: this.nextTaskId,
          title: this.todoValue,
          completed: false,
        });
        this.todoValue = '';
      }
    }
    console.log(this.taskService.getAllTasks());
  }
}
