import { Injectable } from '@angular/core';
import { Product } from '../gets/products.service';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: Product; quantity: number }[] = [];
  private cartTotal: number = 0;
  // Observable para notificar cambios en los elementos del carrito
  cartItemsChanged: Subject<void> = new Subject<void>(); 

  getCartItems(): { product: Product; quantity: number }[] {
    return this.cartItems;
  }

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product === product);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  
    // Recalcula el total y notifica cambios
    this.calculateCartTotal();
    this.cartItemsChanged.next();
  }

  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  
    // Recalcula el total y notifica cambios
    this.calculateCartTotal();
    this.cartItemsChanged.next();
  }
  

  getCartItemCount(): number {
    return this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }

  updateQuantity(index: number, newQuantity: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems[index].quantity = newQuantity;
  
      // Recalcula el total y notifica cambios
      this.calculateCartTotal();
      this.cartItemsChanged.next();
    }
  }

  private calculateCartTotal(): void {
    // Recalcula el total del carrito aquí
    this.cartTotal = this.cartItems.reduce((total, item) => {
      const itemPrecio = parseFloat(item.product.precio);
      const itemQuantity = parseFloat(item.quantity.toString());
  
      if (!isNaN(itemPrecio) && !isNaN(itemQuantity)) {
        return total + itemPrecio * itemQuantity;
      } else {
        console.error('Error: Los valores de precio o cantidad no son números válidos.');
        return total;
      }
    }, 0);
  }

  getCartTotal(): number {
    return this.cartTotal;
  }

}

