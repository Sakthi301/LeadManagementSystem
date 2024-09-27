import { Component, OnInit } from '@angular/core';
import { LeadManagementService } from '../lead-management/lead-management.service'; // Adjust path as needed

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  indiaMARTLeads = 120;
  indiaMARTTotal = 150;
  indiaMARTPending = 30;

  instagramLeads = 80;
  instagramTotal = 100;
  instagramPending = 20;

  justDialLeads = 90;
  justDialTotal = 110;
  justDialPending = 20;

  twitterLeads = 60;
  twitterTotal = 80;
  twitterPending = 20;

  facebookLeads = 70;
  facebookTotal = 90;
  facebookPending = 20;

  tradeIndiaLeads=80;
  tradeIndiaPending=40;

  constructor(private leadService: LeadManagementService) {}

  ngOnInit(): void {
   
  }

}