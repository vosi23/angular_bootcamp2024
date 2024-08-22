import { Component, Input } from '@angular/core';
import { newTaskI } from './task/task.model';

interface UserI
{
  id: string,
  name: string,
  avatar: string 
}

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) user!: UserI;
  isAddingTask: boolean= false;

  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]


  onCompleteTask(id: string)
  {
    this.dummyTasks= this.dummyTasks.filter((task) => task.id != id);
  }

  onStartAddTask()
  {
    this.isAddingTask= true;
  }

  onCancelAddTask()
  {
    this.isAddingTask= false;
  }

  onEndAddTask(newTask: newTaskI)
  {
    this.dummyTasks.push({
      id: new Date().getTime().toString(),
      userId: this.user.id,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    })
    this.isAddingTask= false;
  }
}
