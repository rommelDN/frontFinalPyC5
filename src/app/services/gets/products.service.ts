import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private products: Product[]=[
    {
      nombre:"Fresas",
      marca:"Arbolera",
      img:"assets/img/products/product-img-1.jpg",
      precio:"5.40",
      categoria:"Frutas",
    },
    {
      nombre:"Mandarina",
      marca:"Arbolera",
      img:"assets/img/products/product-img-1.jpg",
      precio:"3.40",
      categoria:"Frutas"
    },
    {
      nombre:"Naranja",
      marca:"Arbolera",
      img:"assets/img/products/product-img-1.jpg",
      precio:"6.40",
      categoria:"Frutas"
    },
    {
      nombre:"Naranja",
      marca:"Arbolera",
      img:"assets/img/products/product-img-1.jpg",
      precio:"6.40",
      categoria:"Frutas"
    },
    {
      nombre:"Naranja",
      marca:"Arbolera",
      img:"assets/img/products/product-img-1.jpg",
      precio:"6.40",
      categoria:"Frutas"
    },
    {
      nombre:"Naranja",
      marca:"Arbolera",
      img:"assets/img/products/product-img-1.jpg",
      precio:"6.40",
      categoria:"Frutas"
    },
    {
      nombre:"Naranja",
      marca:"Arbolera",
      img:"assets/img/products/product-img-1.jpg",
      precio:"6.40",
      categoria:"Frutas"
    },
    {
      nombre:"Leche",
      marca:"Gloria",
      img:"assets/img/products/product-img-1.jpg",
      precio:"6.40",
      categoria:"Lacteos"
    }
  ]
  constructor() { }

  getProducts = () => this.products;

  getProduct = (id:any) => this.products[id];

  getProductsByPageAndCategory(page: number, itemsPerPage: number, category: string): Product[] {
    const filteredProducts = category === 'All' ? this.products : this.products.filter(product => product.categoria === category);
    const startIndex = (page - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }

  // Método para obtener una porción de productos según la página
  getProductsByPage = (page: number, itemsPerPage: number): Product[] => {
    const startIndex = (page - 1) * itemsPerPage;
    return this.products.slice(startIndex, startIndex + itemsPerPage);
  };

  // Opcional: Método para obtener el número total de páginas
  getTotalPages = (itemsPerPage: number): number => {
    return Math.ceil(this.products.length / itemsPerPage);
  };

  getCategories = (): string[] => {
    // Obtener todas las categorías únicas de los productos
    const uniqueCategories = Array.from(new Set(this.products.map(product => product.categoria)));
    return ['All', ...uniqueCategories]; // Agregar 'All' como opción para mostrar todos los productos
  };

  getProductsByCategory = (category: string): Product[] => {
    // Filtrar productos por categoría
    return category === 'All' ? this.products : this.products.filter(product => product.categoria === category);
  };


}
export interface Product{
  nombre:string;
  marca:string;
  img:string;
  precio:string;
  categoria:string;
  //indice?:number;

}