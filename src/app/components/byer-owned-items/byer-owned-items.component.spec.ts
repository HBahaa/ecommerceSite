import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerOwnedItemsComponent } from './buyer-owned-items.component';

describe('BuyerOwnedItemsComponent', () => {
  let component: BuyerOwnedItemsComponent;
  let fixture: ComponentFixture<BuyerOwnedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerOwnedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerOwnedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
