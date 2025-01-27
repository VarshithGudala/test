import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-header></app-header>
    <div class="container mt-4">
      <app-customer-search></app-customer-search>
    </div>
    <app-footer></app-footer>
  `,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    CustomerSearchComponent
  ]
})
export class AppComponent {}