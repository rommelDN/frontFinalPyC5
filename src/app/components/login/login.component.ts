import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/logicdiraba/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  '../../../assets/bootstrap/css/bootstrap.min.css',
  '../../../assets/css/all.min.css',
  '../../../assets/css/animate.css',
  '../../../assets/css/magnific-popup.css',
  '../../../assets/css/main.css',
  '../../../assets/css/meanmenu.min.css',
  '../../../assets/css/responsive.css',
  '../../../assets/css/css/style.css',
  '../../../assets/login/css/style.css',]
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService,private userService: UserService) {}

  onSubmit(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log(response);
        this.authService.processLogin(response);
        this.userService.setUser(response.user);
      },
      (error) => {
        console.error('Error durante el inicio de sesión', error);
        // Manejar el error de inicio de sesión según sea necesario
      }
    );
  }
}
