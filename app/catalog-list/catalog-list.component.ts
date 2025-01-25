import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../order.service';
import { CatalogService } from '../catalog.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-catalog-list',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ], // Import CommonModule here for *ngFor and other directives
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css'],
  standalone: true,
})
export class CatalogListComponent implements OnInit {
  productsForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private orderService: OrderService,
    private router: Router,
    private catalogService: CatalogService,
  ) {}

  ngOnInit(): void {
    this.productsForm = this.fb.group({
      products: this.fb.array([]),
    });

    this.catalogService.getProducts().subscribe((products: any) => {

      /*if (products && products.length > 0) {
        console.warn('products received from the API.');
      } else {
        console.warn('No products received from the API.');
      }*/

      //console.log(this.productsForm.get('products')?.value);

      const productArray = this.productsForm.get('products') as FormArray;
      
      //console.log(""+productArray);

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
      //productArray.reset();
    });
  }

  get products() {
    return this.productsForm.get('products') as FormArray;
  }

  onSubmit() {
    const selectedProducts = this.products.value.filter((p: any) => p.selected);

        this.orderService.submitOrder({ products: selectedProducts }).subscribe(
      (response) => {
        alert('Order submitted successfully');
        this.router.navigate(['/'], { queryParams: { refresh: 'true' } });
      },
      (error) => {
        alert('Error submitting order');
        this.router.navigate(['/order'], { queryParams: { refresh: 'true' } }).then((navigated) => {
          console.log('Navigation Success:', navigated);
        });
        
      }
      
    );
  }
}
