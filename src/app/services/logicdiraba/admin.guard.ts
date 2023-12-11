// admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Verificar si el usuario está autenticado y es un administrador
    if (this.authService.isAuthenticatedUser() && this.authService.isAdmin()) {
      return true;
    } else {
      // Redirigir a la página de inicio si no está autorizado
      this.router.navigate(['/home']);
      return false;
    }
  }
}


