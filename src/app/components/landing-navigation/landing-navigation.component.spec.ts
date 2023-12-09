import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavigationComponent } from './landing-navigation.component';

describe('LandingNavigationComponent', () => {
  let component: LandingNavigationComponent;
  let fixture: ComponentFixture<LandingNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LandingNavigationComponent]
    });
    fixture = TestBed.createComponent(LandingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
