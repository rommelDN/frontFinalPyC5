import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/logicdiraba/auth.service';
import { Router } from '@angular/router';

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
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (this.authService.login(username, password)) {
      // Redirige a la página de perfil después del inicio de sesión
      this.router.navigate(['/admin']);
    } else {
      // Muestra un mensaje de error en caso de falla de autenticación
      console.log('Error de inicio de sesión');
    }
  }
}
