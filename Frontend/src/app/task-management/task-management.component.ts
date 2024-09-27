import { Component, OnInit } from '@angular/core';
import { TaskManagementService } from './task-management.service';
import { Lead } from '../lead-management/lead-management.model';
import { AssignedTask } from '../assigned-task/assigned-task.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {
  leads: Lead[] = [];
  filteredLeads: Lead[] = [];
  selectedDate: string = '';
  selectedExecutive: string = '';
  executives: string[] = ['Executive 1', 'Executive 2', 'Executive 3', 'Executive 4', 'Executive 5'];
  submitted = false;

  constructor(private taskManagementService: TaskManagementService) { }

  ngOnInit(): void {
    this.fetchLeads();
  }

  fetchLeads() {
    this.taskManagementService.getLeads().subscribe({
      next: (res) => {
        this.leads = res.map(lead => ({ ...lead, selected: false }));
        this.filteredLeads = [...this.leads];
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  filterLeadsByDate() {
    if (this.selectedDate) {
      this.filteredLeads = this.leads.filter(lead => lead.QUERY_TIME.startsWith(this.selectedDate));
    } else {
      this.filteredLeads = [...this.leads];
    }
  }

  submitForm() {
    this.submitted = true;

    if (!this.selectedExecutive) {
      // Show SweetAlert2 popup
      Swal.fire('Error', 'Please select an executive.', 'error');
      return;
    }

    const selectedLeads = this.filteredLeads.filter(lead => lead.selected);
    
    if (selectedLeads.length === 0) {
      // Show SweetAlert2 popup
      Swal.fire('Error', 'Please select at least one lead.', 'error');
      return;
    }

    const currentDate = new Date();
    const assignedDate = this.selectedDate;
    const assignedTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  
    const tasks: AssignedTask[] = selectedLeads.map(lead => ({
      id: 0, // Placeholder or auto-generated ID from the backend
      executiveName: this.selectedExecutive,
      assignedDate: assignedDate,
      assignedTime: assignedTime,
      uniqueQueryId: lead.UNIQUE_QUERY_ID,
      queryType: lead.QUERY_TYPE,
      queryTime: lead.QUERY_TIME,
      senderName: lead.SENDER_NAME,
      senderMobile: lead.SENDER_MOBILE,
      senderEmail: lead.SENDER_EMAIL,
      subject: lead.SUBJECT,
      senderCompany: lead.SENDER_COMPANY,
      senderAddress: lead.SENDER_ADDRESS,
      senderCity: lead.SENDER_CITY,
      senderState: lead.SENDER_STATE,
      senderPincode: lead.SENDER_PINCODE,
      senderCountryIso: lead.SENDER_COUNTRY_ISO,
      queryProductName: lead.QUERY_PRODUCT_NAME,
      queryMessage: lead.QUERY_MESSAGE,
      queryMcatName: lead.QUERY_MCAT_NAME,
      callDuration: lead.CALL_DURATION,
      receiverMobile: lead.RECEIVER_MOBILE
    }));

    this.taskManagementService.saveTask(tasks).subscribe({
      next: () => {
        Swal.fire('Success', 'Tasks saved successfully', 'success');
        this.fetchLeads(); // Refresh leads after task submission
      },
      error: (err) => {
        console.error('Error saving tasks:', err);
        Swal.fire('Error', 'Error saving tasks', 'error');
      }
    });
  }
}
