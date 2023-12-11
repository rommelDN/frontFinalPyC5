// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, of } from 'rxjs';
import { UserService } from '../user/user.service';

export interface User{
  user: any;
  found: any;
  _id:string;
  name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  repeat_password: string;
  admin: boolean;
  shopping_car: {
    total: number;
    cantidad: number;
    products: [
      {
        product: string;
        brand: string;
        category: string;
        price: string;
        img: string;
        filename: string;
        cantidad:string;
      }
    ]
  }
  showProducts?: boolean;
}

export interface UserR{
  name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  repeat_password: string;
  admin: Boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private currentUser: User | null = null;

  constructor(private http: HttpClient,private router:Router,private userService:UserService) {
    // Recupera el estado de autenticación desde localStorage al iniciar la aplicación
    this.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated') || 'false');
  }

  login(username: string, password: string): Observable<any> {
    const loginUrl = 'http://localhost:9000/api/users/login';

    // Enviar datos de inicio de sesión en el cuerpo de la solicitud
    const body = { username, password };

    // Realizar una solicitud POST al endpoint de login en tu API
    return this.http.post(loginUrl, body);
  }

  registerUser(userData: any): Observable<any> {
    const apiUrl = 'http://localhost:9000/api/users/create';
    
    return this.http.post<UserR>(apiUrl, userData);
  }


  processLogin(response: any): void {
    // Procesar el resultado de la autenticación
    if (response.login) {
      // Almacenar el estado de autenticación en localStorage
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
  
      // Realiza una solicitud adicional para obtener los detalles completos del usuario
      this.getUserDetails(response.user).subscribe(
        (user: User) => {
          console.log(user);
          this.currentUser = user;
          this.userService.setUser(this.currentUser);
          // Redirigir según la lógica de tu aplicación
          localStorage.setItem('currentUser', JSON.stringify(user));

          if (user.admin) {
            // Redirigir a la página de administrador
            this.router.navigate(['/admin']);
          } else {
            // Redirigir a la página de usuario común
            this.router.navigate(['/shop']);
          }
        },
        (error) => {
          console.error('Error al obtener detalles del usuario:', error);
          // Manejar el error según tu lógica
        }
      );
    }
  }
  

  isAdmin(): boolean {
    // Verificar si el usuario actual es un administrador
    return this.currentUser?.admin || true;
  }


  getUserDetails(username: string): Observable<User> {
    // Construye la URL para obtener detalles del usuario por username
    const userDetailUrl = `http://localhost:9000/api/users/${username}`;
    // Realiza una solicitud GET para obtener detalles del usuario
    return this.http.get<User>(userDetailUrl);
  }


  getCurrentUser(): Observable<User | null> {
  // Verifica si hay un usuario autenticado
  if (this.isAuthenticatedUser()) {
    // Si está autenticado, obtén los detalles del usuario
    const userId = this.currentUser?._id; // Usamos la ID del usuario
    return this.findUserById(userId || '');
  } else {
    // Si no está autenticado, devuelve null
    return of(null);
  }
}

  findUserById(id: string): Observable<User | undefined> {
    // Llama a tu API para obtener los detalles del usuario por id
    const userDetailUrl = `http://localhost:9000/api/users/${id}`;
    
    return this.http.get<User>(userDetailUrl);
      
  }

  
  logout(): void {
    this.isAuthenticated = false;
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);

  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}