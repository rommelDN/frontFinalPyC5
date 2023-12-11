import { Component,OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/services/logicdiraba/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tb-com',
  templateUrl: './tb-com.component.html',
  styleUrls: ['./tb-com.component.css']
})
export class TbComComponent implements OnInit {
  
  userData: User;

  constructor(private authService: AuthService,private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(
      (response)=>{
        if (response.found && response.user) {
          const user = response.user;
          console.log(user);
          this.userData = user
          // Aquí puedes hacer lo que necesites con el objeto de usuario
        } else {
          console.error('No se encontró el usuario.');
        }
      }
      
    );

  }
}

