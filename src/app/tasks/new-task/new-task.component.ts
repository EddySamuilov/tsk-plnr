import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
  private tasksService = inject(TasksService); // Another way (rather than constructor injecting) to inject the service

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // Using signals - just use "signal" keyword before the init. Nothing else!
  // enteredTitle = signal('');

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      },
      this.userId
    );

    this.close.emit();
  }
}
