import { Routes } from '@angular/router';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogViewComponent } from './catalog-view/catalog-view.component';
import { CatalogEditComponent } from './catalog-edit/catalog-edit.component';
import { OrderSearchComponent } from './order-search/order-search.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', component: CatalogListComponent },
  { path: 'order', component: OrderSearchComponent },
  { path: 'catalog/view/:id', component: CatalogViewComponent },
  { path: 'catalog/edit/:id', component: CatalogEditComponent },
  { path: 'new-order', component: CatalogListComponent },
 ];
