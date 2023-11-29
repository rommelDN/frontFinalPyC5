import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/logicdiraba/auth.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css',]
})
export class AdminComponent {
  constructor(private authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }

  logout(): void {
    this.authService.logout();
  }
}
