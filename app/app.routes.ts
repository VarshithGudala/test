import { Routes } from '@angular/router';
import { CatalogListComponent } from './catalog-list/catalog-list.component';
import { CatalogViewComponent } from './catalog-view/catalog-view.component';
import { CatalogEditComponent } from './catalog-edit/catalog-edit.component';
import { CatalogDeleteComponent } from './catalog-delete/catalog-delete.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: 'catalog', component: CatalogListComponent },
  { path: 'catalog/view/:id', component: CatalogViewComponent },
  { path: 'catalog/edit/:id', component: CatalogEditComponent },
  { path: 'catalog/delete/:id', component: CatalogDeleteComponent },
];