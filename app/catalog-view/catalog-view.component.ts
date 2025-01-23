/*import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog-view',
  imports: [],
  templateUrl: './catalog-view.component.html',
  styleUrl: './catalog-view.component.css'
})
export class CatalogViewComponent {

}
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule], // Import CommonModule here for *ngFor and other directives
   selector: 'app-catalog-view',
  template: './catalog-view.component.html',
})
export class CatalogViewComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute, private catalogService: CatalogService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.catalogService.getProductById(id).subscribe((data) => (this.product = data));
  }
}