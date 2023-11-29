import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService) { }
  onSubmit(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        // Assuming the backend sends back a token upon successful login
        const token = response.token; // Adjust this based on the actual response structure
        // Store the token securely (e.g., in localStorage)
        localStorage.setItem('token', token);
        console.log('Login successful! Token stored:', token);
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login error here
      }
    );
  }


}
