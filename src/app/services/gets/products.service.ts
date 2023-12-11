import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiUrl = 'http://localhost:9000/api/products';
  constructor(private http: HttpClient) { }

  deleteProduct(id:string):Observable<Product>{
    const deleteProUrl = `${this.apiUrl}/${id}`;
    return this.http.delete<Product>(deleteProUrl);

  }

  editProduct(id: string, updatedData: Partial<Product>): Observable<Product> {
    const editProductUrl = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(editProductUrl, updatedData);
  }

  createProduct(productData: FormData): Observable<Product> {
    const createProductUrl = `${this.apiUrl}/create`;
    return this.http.post<Product>(createProductUrl, productData);
  }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: string): Observable<Product> {
    const productUrl = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(productUrl);
  }

  getProductsByPageAndCategory(page: number, itemsPerPage: number, category: string): Observable<Product[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('itemsPerPage', itemsPerPage.toString());
  
    return this.http.get<Product[]>(this.apiUrl, { params }).pipe(
      map(products => {
        // Filtrar productos por categoría
        if (category && category !== 'All') {
          return products.filter(product => product.category === category);
        } else {
          return products;
        }
      }),
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        throw error;
      })
    );
  }
  
  
  
  // Método para obtener una porción de productos según la página
  getProductsByPage(page: number, itemsPerPage: number): Observable<Product[]> {
    const params = { page: page.toString(), itemsPerPage: itemsPerPage.toString() };
    return this.http.get<Product[]>(this.apiUrl, { params });
  }

  // Opcional: Método para obtener el número total de páginas
  getTotalPages(itemsPerPage: number): Observable<number> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(products => Math.ceil(products.length / itemsPerPage))
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(products => {
        const uniqueCategories = Array.from(new Set(products.map(product => product.category)));
        return ['All', ...uniqueCategories];
      })
    );
  }
  

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(products => {
        if (category === 'All') {
          return products;
        } else {
          return products.filter(product => product.category === category);
        }
      })
    );
  }

}
export interface Product {
  _id:string;
  product: string;
  brand: string;
  category: string;
  price: number;
  img: string;
}