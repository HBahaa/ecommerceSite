import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByerSuggestedComponent } from './byer-suggested.component';

describe('ByerSuggestedComponent', () => {
  let component: ByerSuggestedComponent;
  let fixture: ComponentFixture<ByerSuggestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByerSuggestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByerSuggestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
