import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  // FormsModule -> ngModule
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() isCanceled= new EventEmitter<void>();
  titleText= '';
  summaryText= '';
  dueDateText= '';


  onCancel()
  {
    this.isCanceled.emit();
    this.titleText= '';
    this.summaryText= '';
    this.dueDateText= ''
  }

  onSubmit()
  {
    
  }
}
