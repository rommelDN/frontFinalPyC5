import { Injectable } from '@angular/core';
import { Product } from '../gets/products.service';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService, User } from '../logicdiraba/auth.service';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: Product; quantity: number }[] = [];
  private cartTotal: number = 0;
  // Observable para notificar cambios en los elementos del carrito
  cartItemsChanged: Subject<void> = new Subject<void>(); 

  constructor(private http: HttpClient,private authService:AuthService) {}


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
      const itemPrecio = item.product.price;
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

  checkout(productId: string, userResponse: any, quantity: number): void {
    const user = userResponse.user; 
    
    console.log('Username: ',user);
      const checkoutData = {
        username: user.username,
        id: productId,
        cantidad: quantity,
      };
      

      this.http.post('http://localhost:9000/api/car/add', checkoutData).subscribe(
        (response) => {
          console.log('Compra registrada con éxito', response);
          // Limpiar el carrito después de una compra exitosa
          this.cartItems = [];
          this.cartTotal = this.getCartTotal();
          this.cartItemsChanged.next();
        }
      );
    
  }


}


