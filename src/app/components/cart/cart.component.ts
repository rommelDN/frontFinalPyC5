import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/logicdiraba/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private authService: AuthService) {}

  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }

  logout(): void {
    this.authService.logout();
  }
}
