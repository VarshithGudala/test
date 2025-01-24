import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // Import CommonModule here for *ngFor and other directives
  templateUrl: './order-search.component.html',
  styleUrls: ['./order-search.component.css'],
  providers: [OrderService],
})
export class OrderSearchComponent {
  searchForm: FormGroup;
  orders: any[] = [];
  isLoading = false;

  constructor(private fb: FormBuilder, 
  private route: ActivatedRoute,
  private router: Router,
    private orderService: OrderService) {
    this.searchForm = this.fb.group({
      orderDateFrom: [''],
      orderDateTo: [''],
      orderId: [''],
    });

    // Refresh results when navigating back
  this.route.queryParams.subscribe((params) => {
    if (params['refresh'] === 'true') {
      this.searchOrders();
    }
  });
  }

  navigateToNewOrder() {
    this.router.navigate(['/catalog']);
  }
  
  
  searchOrders() {
    this.isLoading = true;
    this.orderService.searchOrders(this.searchForm.value).subscribe({
      next: (data) => {
        this.orders = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Error fetching orders');
      },
    });
  }
}
