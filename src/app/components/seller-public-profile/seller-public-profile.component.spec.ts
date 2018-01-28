import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPublicProfileComponent } from './seller-public-profile.component';

describe('SellerPublicProfileComponent', () => {
  let component: SellerPublicProfileComponent;
  let fixture: ComponentFixture<SellerPublicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerPublicProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerPublicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
