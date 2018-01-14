import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkoutstep2Component } from './checkoutstep2.component';

describe('Checkoutstep2Component', () => {
  let component: Checkoutstep2Component;
  let fixture: ComponentFixture<Checkoutstep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Checkoutstep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Checkoutstep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
