import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [
    {
      title: 'implement routing',
      tasks: [
        {
          title: 'add routing module to package.json',
          completed: false,
        },
      ],
    },
    {
      title: 'task title 2',
      tasks: [
        {
          title: 'sub task 2',
          completed: false,
        },
        {
          title: 'sub task 45',
          completed: true,
        },
      ],
    },
    {
      title: 'task title 3',
      tasks: [
        {
          title: 'sub task 3 list 3',
          completed: false,
        },
        {
          title: 'sub task list 3',
          completed: false,
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
