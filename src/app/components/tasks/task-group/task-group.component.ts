import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../models/tasks';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.css'],
})
export class TaskGroupComponent implements OnInit {
  @Input('tasks') tasks: Task[] = [];
  currentTask: Task = {} as Task;

  constructor() {}

  ngOnInit(): void {
    this.currentTask = this.tasks[0];
  }

  selectTask(currentTask: Task) {
    this.currentTask = currentTask;
  }
}
