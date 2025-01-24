import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule], // Import CommonModule here for *ngFor and other directives
   selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent implements OnInit {
  products: any[] = [];

  constructor(private catalogService: CatalogService, private router: Router) {}

  ngOnInit(): void {
    this.catalogService.getProducts().subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.products = data;
        } else {
          console.warn('No products received from the API.');
        }
      },
      (error) => {
        console.error('Failed to load products:', error);
      }
    );
  }

  fetchProducts(): void {
    this.catalogService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  viewProduct(id: number): void {
    this.router.navigate(['/catalog/view', id]);
  }

  editProduct(id: number): void {
    this.router.navigate(['/catalog/edit', id]);
  }
}
