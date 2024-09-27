import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { username: '', password: '', role: '' };
  roles: string[] = ['Admin', 'Employee'];
  showPassword: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit(): void {
    // Check if username or password is empty
    if (!this.loginData.username || !this.loginData.password) {
      Swal.fire({
        icon: 'warning',
        title: 'Missing Information',
        text: 'Please enter both username and password.',
        customClass: {
          title: 'my-warning-title',
          confirmButton: 'my-warning-confirm'
        }
      });
      return;
    }

    // Send login request if both fields are filled
    this.http.post<any>('http://localhost:8080/api/users/login', this.loginData)
      .subscribe(
        (user) => {
          if (user) {
            console.log('Login successful', user);
            localStorage.setItem('user', JSON.stringify(user));
            Swal.fire({
              icon: 'success',
              title: 'Login Successful',
              text: 'You are now logged in.',
              customClass: {
                title: 'my-success-title',
                confirmButton: 'my-success-confirm'
              },
              timer: 1500,
              timerProgressBar: true,
              willClose: () => {
                this.router.navigate(['/home']);
              }
            });
          }
        },
        (error) => {
          console.error('Login error', error);
          if (error.error && error.error.message) {
            if (error.error.message === 'Invalid password') {
              Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'The password you entered is incorrect.',
                customClass: {
                  title: 'my-error-title',
                  confirmButton: 'my-error-confirm'
                }
              });
            } else if (error.error.message === 'User not found') {
              Swal.fire({
                icon: 'error',
                title: 'Invalid Username',
                text: 'The username you entered does not exist.',
                customClass: {
                  title: 'my-error-title',
                  confirmButton: 'my-error-confirm'
                }
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: 'An error occurred during login. Please try again later.',
                customClass: {
                  title: 'my-error-title',
                  confirmButton: 'my-error-confirm'
                }
              });
            }
          } 
        }
      );
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
