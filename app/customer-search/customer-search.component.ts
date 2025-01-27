import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-search.component.html',
  styles: [
    `
      .form-group {
        margin-bottom: 16px;
      }
      .form-control {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      .btn-primary {
        background-color: #007bff;
        border-color: #007bff;
        padding: 10px 20px;
        border-radius: 5px;
        color: white;
      }
      .table {
        width: 100%;
        margin-top: 20px;
        border-collapse: collapse;
      }
      .table th, .table td {
        border: 1px solid #ddd;
        padding: 8px;
      }
      .table th {
        background-color: #f2f2f2;
        text-align: left;
      }
    `
  ]
})
export class CustomerSearchComponent {
  searchForm: FormGroup;
  customers: any[] = [];

  constructor(private fb: FormBuilder, private customerService: CustomerService) {
    this.searchForm = this.fb.group({
      customerId: [''],
      firstName: [''],
      zipCode: [''],
      creationDate: ['']
    });
  }

  onSearch() {
    const filters = this.searchForm.value;
    this.customerService.getCustomers(filters).subscribe(
      (data: any[]) => {
        this.customers = data;
      },
      (error) => {
        console.error('Error fetching customers', error);
      }
    );
  }
}