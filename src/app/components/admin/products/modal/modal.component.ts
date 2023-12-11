import { Component } from '@angular/core';
import { Product, ProductsService } from 'src/app/services/gets/products.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  fileToUpload: File | null = null;

  constructor(private productService: ProductsService) {}
  
  handleFileInput(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const selectedFile: File = fileList[0];
      // Puedes hacer algo con el archivo seleccionado si es necesario
      this.fileToUpload = selectedFile;
    }
  }
  onSubmit(form: any): void {
    const productData: FormData = new FormData();
    productData.append('product', form.value.product);
    productData.append('brand', form.value.brand);
    productData.append('category', form.value.category);
    productData.append('price', form.value.price);
    productData.append('img', this.fileToUpload, this.fileToUpload.name);
    console.log('Nuevo Producto',productData);
    this.productService.createProduct(productData).subscribe(
      (newProduct: Product) => {
        console.log('Producto creado con éxito', newProduct);
        // Puedes realizar acciones con el nuevo producto
      }
    );
  }
  
  
}  


