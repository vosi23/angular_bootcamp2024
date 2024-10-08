import { Component, computed, inject, Input, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { TasksService } from './tasks.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent
{
  userId= input.required<string>();

  // order= input<'asc' | 'desc'>();
  @Input({}) order!: 'asc' | 'desc';

  private tasksService= inject(TasksService);
  userTasks = computed(() => 
    this.tasksService.allTasks().filter((task) => task.userId === this.userId())
  );
}
