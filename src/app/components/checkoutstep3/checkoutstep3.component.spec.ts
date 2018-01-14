import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkoutstep3Component } from './checkoutstep3.component';

describe('Checkoutstep3Component', () => {
  let component: Checkoutstep3Component;
  let fixture: ComponentFixture<Checkoutstep3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkoutstep3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkoutstep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
