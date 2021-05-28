import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../models/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  @Input('task') task: Task = {} as Task;

  constructor() {}

  ngOnInit(): void {
    console.log('Got new taks', this.task.items);
  }

  toggleComplete(task: any) {
    console.log(task);
    // this.taskLists.forEach((listItem) => {
    //   if (listItem === item) {
    //     listItem.completed = !listItem.completed;
    //   }
    // });
  }
}
