import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from './lead-management.model';

@Injectable({
  providedIn: 'root'
})
export class LeadManagementService {
  private apiUrl = 'http://localhost:8080/api/leads';

  constructor(private http: HttpClient) {}

  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>(this.apiUrl);
  }

  // Method to fetch leads from API
  fetchLeads(): void {
    this.getLeads().subscribe({
      next: (data) => console.log('Leads updated:', data),
      error: (err) => console.error('Error fetching leads', err)
    });
  }
}
