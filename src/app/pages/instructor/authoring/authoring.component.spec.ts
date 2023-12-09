import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoringComponent } from './authoring.component';

describe('AuthoringComponent', () => {
  let component: AuthoringComponent;
  let fixture: ComponentFixture<AuthoringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthoringComponent]
    });
    fixture = TestBed.createComponent(AuthoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
