// tb-v.component.ts

import { Component, OnInit } from '@angular/core';
import { SellsService } from 'src/app/services/gets/sells.service';
import { User } from 'src/app/services/logicdiraba/auth.service';

@Component({
  selector: 'app-tb-v',
  templateUrl: './tb-v.component.html',
  styleUrls: ['./tb-v.component.css']
})
export class TbVComponent implements OnInit {

  salesData: User[] = [];

  constructor(private salesService: SellsService) { }

  ngOnInit(): void {
    this.getSales();
  }

  private getSales(): void {
    this.salesService.getSales().subscribe(
      (sales: User[]) => {
        this.salesData = sales.map(sale => ({ ...sale, showProducts: false }));
      }
    );
  }

  calculateTotalQuantity(products: any[]): number {
    return products.reduce((total, product) => total + parseInt(product.cantidad, 10), 0);
  }

  calculateTotalPrice(products: any[]): number {
    return products.reduce((total, product) => total + (parseInt(product.cantidad, 10) * parseFloat(product.price)), 0);
  }

  toggleProducts(sale: User): void {
    sale.showProducts = !sale.showProducts;
  }

}
