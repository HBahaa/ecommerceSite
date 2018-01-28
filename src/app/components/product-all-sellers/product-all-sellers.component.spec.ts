import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAllSellersComponent } from './product-all-sellers.component';

describe('ProductAllSellersComponent', () => {
  let component: ProductAllSellersComponent;
  let fixture: ComponentFixture<ProductAllSellersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAllSellersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAllSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
