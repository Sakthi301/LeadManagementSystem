// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.isAdmin()) {
//       return true;
//     } else {
//       this.router.navigate(['/home/assigned-task']);
//       return false;
//     }
//   }
// }