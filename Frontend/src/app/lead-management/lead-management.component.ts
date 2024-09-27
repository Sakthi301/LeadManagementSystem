import { Component, OnInit } from '@angular/core';
import { LeadManagementService } from './lead-management.service';
import { Lead } from './lead-management.model';

@Component({
  selector: 'app-lead-management',
  templateUrl: './lead-management.component.html',
  styleUrls: ['./lead-management.component.css']
})
export class LeadManagementComponent implements OnInit {
  leads: Lead[] = [];

  constructor(private leadService: LeadManagementService) {}

  ngOnInit(): void {
    this.fetchLeads();
  }

  fetchLeads() {
    this.leadService.getLeads().subscribe({
      next: (data) => this.leads = data,
      error: (err) => console.error('Error fetching leads', err)
    });
  }
}
