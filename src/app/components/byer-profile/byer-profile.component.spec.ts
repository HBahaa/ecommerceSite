import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByerProfileComponent } from './byer-profile.component';

describe('ByerProfileComponent', () => {
  let component: ByerProfileComponent;
  let fixture: ComponentFixture<ByerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
