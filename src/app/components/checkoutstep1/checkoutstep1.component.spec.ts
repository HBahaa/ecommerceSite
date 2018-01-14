import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkoutstep1Component } from './checkoutstep1.component';

describe('Checkoutstep1Component', () => {
  let component: Checkoutstep1Component;
  let fixture: ComponentFixture<Checkoutstep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkoutstep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkoutstep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
