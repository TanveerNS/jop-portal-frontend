// src/app/service/admin/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private AddUser = 'http://localhost:8000/admin/user';
  private UserList = 'http://localhost:8000/admin/users';

  constructor(private http: HttpClient) { }

  // Function to add a user
  addUser(userData: any): Observable<any> {
    const token = localStorage.getItem('token'); // Get token from localStorage

    if (!token) {
      throw new Error('Authorization token is missing');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    return this.http.post(this.AddUser, userData, { headers });
  }
  // Function to get the list of users
  getUsers(): Observable<any> {
    const token = localStorage.getItem('token'); // Get token from localStorage

    if (!token) {
      throw new Error('Authorization token is missing');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });

    return this.http.get(this.UserList, { headers });
  }
}
