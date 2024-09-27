import { Component, OnInit } from '@angular/core';
import { AuthService } from '../employee/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin = false;
  isEmployee = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    this.isEmployee = this.authService.isEmployee();

    if (this.isEmployee && !this.isAdmin) {
      this.router.navigate(['/home/assigned-task']);
    }
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  changePassword(): void {
    // Implement change password logic
  }
}
