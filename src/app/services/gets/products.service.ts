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
    }
  ]
  constructor() { }

  getProducts = () => this.products;

  getProduct = (id:any) => this.products[id];
}
export interface Product{
  nombre:string;
  marca:string;
  img:string;
  precio:string;
  categoria:string;
  //indice?:number;

}