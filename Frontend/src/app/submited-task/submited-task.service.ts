import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubmitedTask } from './submited-task.model';

@Injectable({
  providedIn: 'root'
})
export class SubmitedTaskService {
  private apiUrl = 'http://localhost:8080/api/submitted-tasks';

  constructor(private http: HttpClient) { }

  submitTasks(tasks: SubmitedTask[]): Observable<SubmitedTask[]> {
    return this.http.post<SubmitedTask[]>(this.apiUrl, tasks);
  }

  getSubmittedTasks(): Observable<SubmitedTask[]> {
    return this.http.get<SubmitedTask[]>(this.apiUrl);
  }
}
