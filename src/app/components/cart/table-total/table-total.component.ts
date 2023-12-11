import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { AuthService, User } from 'src/app/services/logicdiraba/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-table-total',
  templateUrl: './table-total.component.html',
  styleUrls: ['./table-total.component.css']
})
export class TableTotalComponent implements OnInit {
  cartTotal: number = 0;
  user: User;
  cartItemCount: number = 0;

  constructor(private cartService: CartService, private authService: AuthService,private userService:UserService) {}

  ngOnInit(): void {

    this.user = this.userService.getUser();

    if (!this.user) {
      // Si no hay información del usuario, realiza alguna acción (puede redirigir o mostrar un mensaje de error)
      console.warn('No hay usuario autenticado.');
      // Puedes redirigir a la página de inicio de sesión o realizar otra acción según tu lógica
    } else {
      // Continúa con la lógica del componente sabiendo que hay un usuario autenticado
      console.log('Usuario actual:', this.user);
      // Suscribirse a cambios en el carrito
      this.cartService.cartItemsChanged.subscribe(() => {
        this.updateCartTotal();
      });
    }

  }

  private updateCartTotal(): void {
    this.cartTotal = this.cartService.getCartTotal();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  checkout(): void {
      this.user = this.userService.getUser();
      const productId = this.cartService.getCartItems()[0].product._id;
      //const quantity = this.cartItemCount;
      const user = this.user;
      console.log('Producto',productId);
      console.log('Usuario',user);
      // Llamar al servicio de carrito con la información necesaria para el checkout
      this.cartService.checkout(productId,user, 1);
    
  }
  
}
