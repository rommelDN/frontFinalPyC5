import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductsService } from 'src/app/services/gets/products.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  products: Product[]= [];
  
  constructor(private _productService: ProductsService){

  }
  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

}
