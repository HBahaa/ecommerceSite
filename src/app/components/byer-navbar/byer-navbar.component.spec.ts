import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByerNavbarComponent } from './byer-navbar.component';

describe('ByerNavbarComponent', () => {
  let component: ByerNavbarComponent;
  let fixture: ComponentFixture<ByerNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByerNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
