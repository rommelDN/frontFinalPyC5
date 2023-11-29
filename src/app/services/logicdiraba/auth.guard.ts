// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true;
    } else {
      // Redirige a la página de inicio de sesión si el usuario no está autenticado
      alert('La pagina ADMIN requiere inicio de sesión.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
