import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (res) => {
        // Handle successful login response here (store token, redirect, etc.)
        console.log('Login successful:', res);
      },
      (error) => {
        // Handle login error here
        console.error('Login error:', error);
      }
    );
  }
}
