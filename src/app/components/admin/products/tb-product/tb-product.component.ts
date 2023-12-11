import { Component,OnInit } from '@angular/core';
import { Product, ProductsService } from 'src/app/services/gets/products.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-tb-product',
  templateUrl: './tb-product.component.html',
  styleUrls: ['./tb-product.component.css']
})
export class TbProductComponent implements OnInit{
  products: Product[] = [];
  modalRef: BsModalRef;

  constructor(private productService: ProductsService,private modalService: BsModalService){}

  ngOnInit(): void {
    this.loadProducts();
  }
  deleteProduct(product:Product){
    this.productService.deleteProduct(product._id).subscribe(
      (data)=>{console.log("Datos borrados: ",data);this.loadProducts();}
    )
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
        console.log('Productos', this.products);
      }
    );
  }
  openEditModal(product: Product): void {
    const initialState = {
      product: { ...product },
    };

    this.modalRef = this.modalService.show(EditProductComponent, { initialState });

    // Suscríbete al evento 'onClose' del modal para realizar acciones después de que se cierre
    this.modalRef.content.onClose.subscribe((result: Product) => {
      if (result) {
        // Si el usuario hizo cambios, actualiza la información del producto
        this.productService.editProduct(product._id, result).subscribe(
          (editedProduct) => {
            console.log('Producto editado con éxito', editedProduct);
            // Puedes realizar acciones adicionales aquí
            this.loadProducts();
          }
        );
      }
    });
  }
}
