import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input() producto: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

}
