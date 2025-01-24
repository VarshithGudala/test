import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../order.service';
import { CatalogService } from '../catalog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalog-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // Import CommonModule here for *ngFor and other directives
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
  standalone: true,
})
export class CatalogListComponent implements OnInit {
  productsForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private orderService: OrderService,
    private catalogService: CatalogService,
  ) {}

  ngOnInit(): void {
    this.productsForm = this.fb.group({
      products: this.fb.array([]),
    });

    this.orderService.getProducts().subscribe((products: any) => {
      const productArray = this.productsForm.get('products') as FormArray;
      products.forEach((product: any) => {
        productArray.push(
          this.fb.group({
            id: [product.id],
            name: [product.name],
            description: [product.description],
            quantity: [1],
            price: [product.price],
            selected: [false],
          })
        );
      });
    });
  }

  get products() {
    return this.productsForm.get('products') as FormArray;
  }

  onSubmit() {
    const selectedProducts = this.products.value.filter((p: any) => p.selected);
    this.orderService.submitOrder({ products: selectedProducts }).subscribe(
      (response) => {
        console.log('Order submitted successfully', response);
      },
      (error) => {
        console.error('Error submitting order', error);
      }
    );
  }
}
