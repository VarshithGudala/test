import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  private apiUrl = 'http://localhost:5230/api/Product'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    // Dummy data for demonstration
    const dummyData: Product[] = [
      { id: 1, name: 'Product 1',  price: 100 },
      { id: 2, name: 'Product 2',  price: 200 },
      { id: 3, name: 'Product 3', price: 300 },
    ];
    return of(dummyData); // Replace with `this.http.get<Product[]>(this.apiUrl)` for API call
  }
  
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }
}
