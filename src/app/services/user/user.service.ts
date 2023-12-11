import { Injectable } from '@angular/core';
import { User } from '../logicdiraba/auth.service';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userKey = 'currentUser'
  private user: User | null = null;
  constructor() { }

  getCurrentUser(): Observable<User | null> {
    // Verifica si ya tienes el usuario almacenado en la propiedad local
    if (this.user) {
      return of(this.user);
    } else {
      // Si no lo tienes, intenta obtenerlo del localStorage
      const storedUser = localStorage.getItem(this.userKey);
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        return of(this.user);
      } else {
        // Si no está en el localStorage, devuelve un observable con valor nulo
        return of(null);
      }
    }
  }
  
  setUser(user: User): void {
    this.user = user;
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): User | null {
    const storedUser = localStorage.getItem(this.userKey);
    return storedUser ? JSON.parse(storedUser) : null;
  }
}
