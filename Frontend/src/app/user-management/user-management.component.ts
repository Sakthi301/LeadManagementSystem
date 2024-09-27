import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-management/user.service';

interface User {
  id?: number;
  username: string;
  password: string;
  role: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  roles: string[] = ['Admin', 'Employee'];
  users: User[] = [];
  newUser: User = { username: '', password: '', role: '' };
  isEditMode: boolean = false; // Flag to determine edit mode

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  createUser(): void {
    if (this.newUser.username && this.newUser.password && this.newUser.role) {
      if (this.isEditMode) {
        this.userService.updateUser(this.newUser).subscribe(user => {
          const index = this.users.findIndex(u => u.id === user.id);
          if (index !== -1) {
            this.users[index] = user;
          }
          this.resetForm();
        });
      } else {
        this.userService.createUser(this.newUser).subscribe(user => {
          this.users.push(user);
          this.resetForm();
        });
      }
    }
  }

  editUser(user: User): void {
    this.newUser = { ...user };
    this.isEditMode = true;
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id!).subscribe(() => {
      this.users = this.users.filter(u => u !== user);
    });
  }

  resetForm(): void {
    this.newUser = { username: '', password: '', role: '' };
    this.isEditMode = false;
  }
}
