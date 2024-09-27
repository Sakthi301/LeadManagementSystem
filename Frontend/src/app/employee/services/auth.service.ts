import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/login'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { username, password }).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          return user;
        }
        return null;
      }),
      catchError(() => of(null))
    );
  }

  getCurrentUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user.role === 'Admin';
  }

  isEmployee(): boolean {
    const user = this.getCurrentUser();
    return user.role === 'Employee';
  }
}
