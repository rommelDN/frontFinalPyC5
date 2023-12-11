import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from 'src/app/services/gets/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input() product: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log('productos en el hijo',this.product);
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

}
