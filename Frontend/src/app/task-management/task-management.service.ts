import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from '../lead-management/lead-management.model'; // Adjust path if needed
import { AssignedTask } from '../assigned-task/assigned-task.model'; // Adjust path if needed
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class TaskManagementService {
  private apiUrl = 'http://localhost:8080/api/leads'; // Endpoint for fetching all leads
  private taskApiUrl = 'http://localhost:8080/api/assigned-tasks'; // Endpoint for saving tasks

  constructor(private http: HttpClient) { }

  // Fetch all leads
  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>(this.apiUrl);
  }

  // Save assigned tasks
  saveTask(tasks: AssignedTask[]): Observable<void> {
    return this.http.post<any>(this.taskApiUrl, tasks);
  }

  // Fetch assigned tasks (assigend-task)
  getAssignedTasks(): Observable<AssignedTask[]> {
    return this.http.get<AssignedTask[]>(this.taskApiUrl); // Adjust endpoint if necessary
  }


  // Show a SweetAlert2 popup
  showPopup(message: string, isSuccess: boolean = true): void {
    Swal.fire({
      icon: isSuccess ? 'success' : 'error',
      title: isSuccess ? 'Success' : 'Error',
      text: message
    });
  }
}
