// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
  tipo: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [
    { username: 'usuario1', password: 'contrasena1', tipo: '1' },
    { username: 'usuario2', password: 'contrasena2', tipo: '2' },
    // Agrega más usuarios según sea necesario
  ];

  private isAuthenticated: boolean = false;

  constructor(private router: Router) {
    // Recupera el estado de autenticación desde localStorage al iniciar la aplicación
    this.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || 'false');
  }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);

    if (user) {
      this.isAuthenticated = true;
      // Almacena el estado de autenticación en localStorage
      localStorage.setItem('isAuthenticated', 'true');

      // Redirige según el tipo de usuario
      if (user.tipo === '1') {
        this.router.navigate(['/admin']);
      } else if (user.tipo === '2') {
        this.router.navigate(['/cart']);
      }

      return true;
    } else {
      this.isAuthenticated = false;
      localStorage.setItem('isAuthenticated', 'false');
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.setItem('isAuthenticated', 'false');
    // Redirige a la página de inicio después de realizar el logout
    this.router.navigate(['/home']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
