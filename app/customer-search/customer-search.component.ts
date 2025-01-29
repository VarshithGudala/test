import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent {
  searchForm: FormGroup;
  customers: any[] = [];
  selectedCustomer: any = null;

  constructor(private fb: FormBuilder, 
    private customerService: CustomerService,
    private router: Router) {
    this.searchForm = this.fb.group({
      customerId: [''],
      firstName: [''],
      zipCode: [''],
      creationDate: ['']
    });
  }

  selectCustomer(customer: any) 
  { this.selectedCustomer = customer; }


  goToOrderPage(customer: any) 
    { 
      if (this.selectedCustomer) 
        { 
          this.router.navigate(['/order'], { queryParams: { customerId: customer.id } }); 
        } 
      else { alert('Please select a customer first.'); 

      }
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
