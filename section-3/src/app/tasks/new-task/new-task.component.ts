import { Component, EventEmitter, Output } from '@angular/core';
import { newTaskI } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel= new EventEmitter<void>();
  @Output() add = new EventEmitter<newTaskI>();
  titleText= '';
  summaryText= '';
  dueDateText= '';


  onCancel()
  {
    this.cancel.emit();
    this.titleText= '';
    this.summaryText= '';
    this.dueDateText= '';
  }

  onSubmit()
  {
    this.add.emit({
      title: this.titleText,
      summary: this.summaryText,
      date: this.dueDateText
    });
    this.titleText= '';
    this.summaryText= '';
    this.dueDateText= '';
  }
}
