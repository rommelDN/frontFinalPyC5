import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService, User, UserR } from 'src/app/services/logicdiraba/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private httpClient: HttpClient,private authService: AuthService) {}
  
  onCreate(form: any): void {
    const userData = {
      name: form.value.name,
      last_name: form.value.last_name,
      email: form.value.email,
      username: form.value.username,
      password: form.value.password,
      repeat_password: form.value.repeat_password,
      admin: false, // Establecer admin como false
    };
    
    console.log('Nuevo usuario', userData);

    this.authService.registerUser(userData).subscribe(
      (newUser: any) => {
        console.log('Usuario Registrado: ', newUser);
      },
      (error: any) => {
        console.error('Error al registrar usuario: ', error);
      }
    );

  // Enviar la solicitud HTTP
  this.httpClient.post('http://localhost:9000/api/users/create', userData).subscribe(
    (newUser: any) => {
      console.log('Usuario Registrado: ', newUser);
    },
    (error: any) => {
      console.error('Error al registrar usuario: ', error);
    }
  );


  }
}
