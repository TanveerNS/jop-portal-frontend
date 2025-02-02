import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/frontend/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(loginForm:NgForm) {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        // Handle successful login
        console.log('Login successful', response);
        localStorage.setItem('token', response.data.token); // Store token or user info as needed
        localStorage.setItem('userId', response.data.userId); // Store token or user info as needed
        this.router.navigate(['/']); // Navigate to dashboard after login
      },
      (error) => {
        // Handle errors
        console.error('Login failed', error);
        this.errorMessage = 'Invalid email or password';
      }
    );
  }
}
