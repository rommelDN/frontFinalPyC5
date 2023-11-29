import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/services/gets/products.service';

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.css']
})
export class TableContentComponent implements OnInit{
  cartItems: CartItem[] = [];
  cartTotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.updateCartTotal();
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.loadCartItems();
    this.updateCartTotal();
  }
  updateCartItem(index: number): void {
    const newQuantity = this.cartItems[index].quantity;
  
    // Asegúrate de que la cantidad no sea menor que 1
    if (newQuantity < 1) {
      // Puedes establecer la cantidad mínima a 1 o manejarlo según tus necesidades
      this.cartItems[index].quantity = 1;
    }
  
    this.cartService.updateQuantity(index, this.cartItems[index].quantity);
    this.loadCartItems();
    this.updateCartTotal();
  }
  


  private updateCartTotal(): void {
    this.cartTotal = this.cartService.getCartTotal();
  }
}
