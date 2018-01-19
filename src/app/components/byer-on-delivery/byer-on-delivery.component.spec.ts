import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByerOnDeliveryComponent } from './byer-on-delivery.component';

describe('ByerOnDeliveryComponent', () => {
  let component: ByerOnDeliveryComponent;
  let fixture: ComponentFixture<ByerOnDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByerOnDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByerOnDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
