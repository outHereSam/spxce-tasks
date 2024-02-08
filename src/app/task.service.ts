import { Injectable } from '@angular/core';
import { TaskItem } from './task-item';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  protected taskList: TaskItem[] = [
    // {
    //   id: 1,
    //   title: 'Design a new todo app',
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   title: 'Build todo app in Angular',
    //   completed: false,
    // },
    // {
    //   id: 3,
    //   title: 'Take a nap',
    //   completed: false,
    // },
  ];
  constructor() {}

  getAllTasks(): TaskItem[] {
    return this.taskList;
  }

  getUncompletedTasks(): TaskItem[] {
    return this.taskList.filter((taskItem) => taskItem.completed === false);
  }

  getCompletedTasks(): TaskItem[] {
    return this.taskList.filter((taskItem) => taskItem.completed === true);
  }

  getTaskById(id: number): TaskItem | undefined {
    return this.taskList.find((task) => task.id === id);
  }

  completeTask(id: number): void {
    const taskIndex = this.taskList.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.taskList[taskIndex].completed = !this.taskList[taskIndex].completed;
    }
  }

  deleteTask(id: number): void {
    const taskIndex = this.taskList.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.taskList.splice(taskIndex, 1);
    }
  }

  addNewTask(task: TaskItem) {
    this.taskList.push(task);
  }
}
