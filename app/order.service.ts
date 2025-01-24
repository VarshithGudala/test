import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:5230/api/products'; // Replace with your API URL
  private orderApiUrl = 'https://dummyapi.com/orders'; // Replace with actual API endpoint


  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }


  searchOrders(criteria: any): Observable<any[]> {
    // Replace with actual API call. Simulating with dummy data.
    const dummyOrders = [
      {
        orderId: '1001',
        orderedBy: 'John Doe',
        orderedDate: new Date(),
        productCount: 3,
      },
      {
        orderId: '1002',
        orderedBy: 'Jane Smith',
        orderedDate: new Date(),
        productCount: 5,
      },
    ];

    return of(dummyOrders);
  }
  
  submitOrder(order: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, order);
  }
}
