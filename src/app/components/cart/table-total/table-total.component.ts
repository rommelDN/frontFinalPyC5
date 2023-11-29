import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-table-total',
  templateUrl: './table-total.component.html',
  styleUrls: ['./table-total.component.css']
})
export class TableTotalComponent {
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateCartTotal();

    // Suscribirse a cambios en el carrito
    this.cartService.cartItemsChanged.subscribe(() => {
      this.updateCartTotal();
    });
  }

  private updateCartTotal(): void {
    this.cartTotal = this.cartService.getCartTotal();
  }
}
