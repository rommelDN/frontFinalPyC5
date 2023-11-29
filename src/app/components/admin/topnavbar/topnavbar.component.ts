import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/logicdiraba/auth.service';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css',]
})
export class TopnavbarComponent {
  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
