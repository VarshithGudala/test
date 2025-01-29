import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(filters: any): Observable<any[]> {
    // Dummy data for demonstration purposes
    const dummyData = [
      {
        id: 1,
        firstName: 'John',
        address: '123 Elm Street',
        zipCode: '12345',
        creationDate: '2023-01-15T00:00:00',
        locations: ['Dallas','Austin', 'Houston','New York']
      },
      {
        id: 2,
        firstName: 'Jane',
        address: '456 Oak Avenue',
        zipCode: '67890',
        creationDate: '2023-02-20T00:00:00',
        locations: ['Los Angeles','Austin', 'Houston','New York']
      },
      {
        id: 3,
        firstName: 'Alice',
        address: '789 Pine Road',
        zipCode: '54321',
        creationDate: '2023-03-10T00:00:00',
        locations: ['Chicago','Austin', 'Houston','New York']
      }
    ];

    // Simulate filtering logic
    const filteredData = dummyData.filter(customer => {
      return (
        (!filters.customerId || customer.id.toString().includes(filters.customerId)) &&
        (!filters.firstName || customer.firstName.toLowerCase().includes(filters.firstName.toLowerCase())) &&
        (!filters.zipCode || customer.zipCode.includes(filters.zipCode)) &&
        (!filters.creationDate || customer.creationDate.startsWith(filters.creationDate))
      );
    });

    return of(filteredData);
  }
}
