import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/logicdiraba/auth.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private authService: AuthService){}
  ngOnInit(): void {
    
  }
  
  isAuthenticated(): boolean {
    return this.authService.isAuthenticatedUser();
  }

}
