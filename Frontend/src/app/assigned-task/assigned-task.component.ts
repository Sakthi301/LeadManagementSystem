import { Component, OnInit } from '@angular/core';
import { AuthService } from '../employee/services/auth.service'; // Adjust the path as needed
import { TaskManagementService } from '../task-management/task-management.service';
import { SubmitedTaskService } from '../submited-task/submited-task.service';
import { AssignedTask } from './assigned-task.model';
import { SubmitedTask } from '../submited-task/submited-task.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assigned-task',
  templateUrl: './assigned-task.component.html',
  styleUrls: ['./assigned-task.component.css']
})
export class AssignedTaskComponent implements OnInit {
  assignedTasks: AssignedTask[] = [];
  isEmployee = false; // Default to false

  constructor(
    private authService: AuthService,
    private taskManagementService: TaskManagementService,
    private submitedTaskService: SubmitedTaskService
  ) {}

  ngOnInit(): void {
    this.fetchAssignedTasks();
    this.checkUserRole(); // Check user role on initialization
  }

  fetchAssignedTasks(): void {
    this.taskManagementService.getAssignedTasks().subscribe({
      next: (tasks) => this.assignedTasks = tasks,
      error: (err) => console.error('Error fetching tasks:', err)
    });
  }

  checkUserRole(): void {
    this.isEmployee = this.authService.isEmployee();
  }

  toggleAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.assignedTasks.forEach(task => task.selected = checked);
  }

  onCheckboxChange(task: AssignedTask, event: Event): void {
    task.selected = (event.target as HTMLInputElement).checked;
  }

  onSubmit(): void {
    const selectedTasks: SubmitedTask[] = this.assignedTasks
      .filter(task => task.selected)
      .map(task => ({ ...task }));

    if (selectedTasks.length === 0) {
      Swal.fire({
        icon: 'warning',
        title: 'No Tasks Selected',
        text: 'Please select at least one task to submit.',
        customClass: {
          title: 'my-warning-title',
          confirmButton: 'my-warning-confirm'
        }
      });
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to submit the selected tasks.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6', // Default color
      cancelButtonColor: '#d33', // Default color
      confirmButtonText: 'Yes, submit it!',
      customClass: {
        title: 'my-warning-title',
        confirmButton: 'my-warning-confirm',
        cancelButton: 'my-warning-cancel'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.submitedTaskService.submitTasks(selectedTasks).subscribe({
          next: (response) => {
            Swal.fire({
              title: 'Submitted!',
              text: 'Your tasks have been submitted successfully.',
              icon: 'success',
              customClass: {
                title: 'my-success-title',
                confirmButton: 'my-success-confirm'
              }
            });
            this.assignedTasks = this.assignedTasks.filter(task => !task.selected);
          },
          error: (err) => {
            Swal.fire({
              title: 'Error!',
              text: 'There was a problem submitting your tasks. Please try again later.',
              icon: 'error',
              customClass: {
                title: 'my-error-title',
                confirmButton: 'my-error-confirm'
              }
            });
            console.error('Error submitting tasks:', err);
          }
        });
      }
    });
  }
}
