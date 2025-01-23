/*import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-list',
  imports: [],
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.css'
})
export class CatalogListComponent {

}
*/

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
    this.fetchProducts();
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

  deleteProduct(id: number): void {
    this.router.navigate(['/catalog/delete', id]);
  }
}