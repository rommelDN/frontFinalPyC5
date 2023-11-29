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
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 1;
  categories: string[] = [];
  selectedCategory: string = 'All';

  constructor(private _productService: ProductsService){

  }
  ngOnInit(): void {
    this.totalPages = this._productService.getTotalPages(this.itemsPerPage);
    this.loadProducts();
    this.loadCategories();
  }
  
  loadProducts(): void {
    this.products = this._productService.getProductsByPageAndCategory(this.currentPage, this.itemsPerPage, this.selectedCategory);
  }

  loadCategories(): void {
    this.categories = this._productService.getCategories();
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadProducts();
    }
  }

  totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, index) => index);
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1; // Reinicia la página cuando se cambia la categoría
    this.loadProducts();
  }

}
