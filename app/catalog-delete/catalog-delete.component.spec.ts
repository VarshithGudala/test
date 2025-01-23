import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDeleteComponent } from './catalog-delete.component';

describe('CatalogDeleteComponent', () => {
  let component: CatalogDeleteComponent;
  let fixture: ComponentFixture<CatalogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
