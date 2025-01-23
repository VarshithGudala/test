import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { FormBuilder, FormGroup } from '@angular/forms';
import { CatalogService } from '../catalog.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule], // Import CommonModule here for *ngFor and other directives
   selector: 'app-catalog-edit',
   templateUrl: './catalog-edit.component.html',
})
export class CatalogEditComponent implements OnInit {
  productForm!: FormGroup;
  productId!: number;

  constructor(
    private fb: FormBuilder,
    private catalogService: CatalogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
    });
    this.productId = 0;
  }

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id')!;
    this.loadProduct();
  }

  loadProduct(): void {
    this.catalogService.getProductById(this.productId).subscribe((product) => {
      this.productForm.patchValue(product);
    });
  }

  saveProduct(): void {
    this.catalogService.updateProduct(this.productId, this.productForm.value).subscribe(() => {
      alert('Product updated successfully!');
      this.router.navigate(['/catalog']);
    });
  }
}
