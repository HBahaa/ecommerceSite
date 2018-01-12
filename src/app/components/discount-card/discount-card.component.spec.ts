import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCardComponent } from './discount-card.component';

describe('DiscountCardComponent', () => {
  let component: DiscountCardComponent;
  let fixture: ComponentFixture<DiscountCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
