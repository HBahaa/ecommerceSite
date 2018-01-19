import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByerWishlistComponent } from './byer-wishlist.component';

describe('ByerWishlistComponent', () => {
  let component: ByerWishlistComponent;
  let fixture: ComponentFixture<ByerWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByerWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByerWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
