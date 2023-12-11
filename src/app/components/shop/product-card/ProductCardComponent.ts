import { Component, OnInit,OnDestroy } from '@angular/core';
import { Product, ProductsService } from 'src/app/services/gets/products.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit,OnDestroy {

  products: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 1;
  categories: string[] = [];
  selectedCategory: string = 'All';
  private subcription: Subscription;

  constructor(private productService: ProductsService) {}
  
  ngOnInit(): void {
    this.subcription = this.productService.getTotalPages(this.itemsPerPage).subscribe(
      (data) => { this.totalPages = data; },
    );
    this.loadProducts();
    this.loadCategories();
    
  }
  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.loadProducts();
  }

  loadProducts(): void {
    console.log('Categoría seleccionada:', this.selectedCategory);
    this.productService.getProductsByPageAndCategory(
      this.currentPage,
      this.itemsPerPage,
      this.selectedCategory
    ).subscribe(
      (data) => {
        // Filtrar productos en Angular
        this.products = data;
        if (this.selectedCategory !== 'All') {
          this.products = this.products.filter(product => product.category === this.selectedCategory);
        }
        console.log('Productos cargados:', this.products);
      }
    );
  }
  

  loadCategories(): void {
    this.subcription = this.productService.getCategories().subscribe(
      (data) => {
        this.categories = Array.isArray(data) ? data : Object.values(data);
        
      }
    );
  }
  

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadProducts();
    }
  }

  totalPagesArray(): number[] {
    console.log(this.totalPages);
    const totalPages = Math.max(1, Math.floor(this.totalPages));
    return Array(totalPages).fill(0).map((_, index) => index);
  }

  
  
  ngOnDestroy(): void {
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }

}
