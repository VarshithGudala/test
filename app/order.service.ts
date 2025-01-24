import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:5230/api/products'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  submitOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, order);
  }
}
