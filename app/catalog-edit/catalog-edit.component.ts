/*mport { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-edit',
  imports: [],
  templateUrl: './catalog-edit.component.html',
  styleUrl: './catalog-edit.component.css'
})
export class CatalogEditComponent {

}
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule], // Import CommonModule here for *ngFor and other directives
   selector: 'app-catalog-edit',
  template: './catalog-edit.component.html',
})
export class CatalogEditComponent implements OnInit {
  productForm: FormGroup;
  productId: number;

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
      this.router.navigate(['/catalog']);
    });
  }
}
