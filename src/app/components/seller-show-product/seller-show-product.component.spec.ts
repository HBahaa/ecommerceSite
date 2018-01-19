import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerShowProductComponent } from './seller-show-product.component';

describe('SellerShowProductComponent', () => {
  let component: SellerShowProductComponent;
  let fixture: ComponentFixture<SellerShowProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerShowProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerShowProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
