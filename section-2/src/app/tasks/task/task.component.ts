import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskI } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: TaskI;
  @Output() completeTask= new EventEmitter<string>();

  onCompleteTask()
  {
    this.completeTask.emit(this.task.id);
  }
}
