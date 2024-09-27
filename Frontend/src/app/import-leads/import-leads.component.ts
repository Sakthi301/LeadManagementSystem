import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ImportLeadsService } from './import-leads.service'; // Adjusted import path
import { LeadManagementService } from '../lead-management/lead-management.service'; // Adjusted import path
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-import-leads',
  templateUrl: './import-leads.component.html',
  styleUrls: ['./import-leads.component.css']
})
export class ImportLeadsComponent {

  constructor(
    private importLeadsService: ImportLeadsService,
    private leadManagementService: LeadManagementService // Inject the LeadManagementService
  ) {}

  importFromIndiaMart(): void {
    this.importLeadsService.importFromIndiaMart().pipe(
      tap(response => {
        // Check the status and message from the backend
        if (response && response.code === 200) {
          if (response.totalRecords > 0) {
            this.leadManagementService.fetchLeads(); // Notify LeadManagementComponent to update its data

            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: `${response.totalRecords} leads saved to the database.`,
            });
            console.log('Leads fetched successfully:', response);
          } else {
            Swal.fire({
              icon: 'info',
              title: 'No Leads Found',
              text: `Failed to fetch leads. Status: SUCCESS, Message: ${response.message}. No leads to save.`,
            });
          }
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Failed to Fetch Leads',
            text: `Failed to fetch leads. Status: FAILURE, Message: ${response.message}. No leads to save.`,
          });
        }
      }),
      catchError(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to fetch leads. Please try again.',
        });
        console.error('Error fetching leads:', error);
        return of(null);
      })
    ).subscribe();
  }
}
