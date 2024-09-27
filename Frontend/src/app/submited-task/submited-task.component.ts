import { Component, OnInit } from '@angular/core';
import { SubmitedTaskService } from './submited-task.service';
import { SubmitedTask } from './submited-task.model';

@Component({
  selector: 'app-submited-task',
  templateUrl: './submited-task.component.html',
  styleUrls: ['./submited-task.component.css']
})
export class SubmitedTaskComponent implements OnInit {
  submitedTasks: SubmitedTask[] = [];

  constructor(private submitedTaskService: SubmitedTaskService) {}

  ngOnInit(): void {
    this.fetchSubmitedTasks();
  }

  fetchSubmitedTasks(): void {
    this.submitedTaskService.getSubmittedTasks().subscribe({
      next: (tasks) => this.submitedTasks = tasks,
      error: (err) => console.error('Error fetching submited tasks:', err)
    });
  }
}
