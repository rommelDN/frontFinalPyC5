import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/logicdiraba/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',
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
export class NavbarComponent{

  constructor(private authService: AuthService) {}
  logout(): void {
    this.authService.logout();
    // Puedes redirigir a la página de inicio u otra página después del logout
    // Ejemplo: this.router.navigate(['/home']);
  }
}
