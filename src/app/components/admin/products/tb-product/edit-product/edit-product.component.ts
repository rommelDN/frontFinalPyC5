import { Component,EventEmitter,Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Product } from 'src/app/services/gets/products.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Output() onClose: EventEmitter<Product> = new EventEmitter<Product>();
  product: Product;

  constructor(public bsModalRef: BsModalRef) {}

  saveChanges(): void {
    this.onClose.emit(this.product);
    this.bsModalRef.hide();
  }

  close(): void {
    this.onClose.emit(null);
    this.bsModalRef.hide();
  }
}
