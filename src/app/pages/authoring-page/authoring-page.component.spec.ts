import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoringPageComponent } from './authoring-page.component';

describe('AuthoringPageComponent', () => {
  let component: AuthoringPageComponent;
  let fixture: ComponentFixture<AuthoringPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthoringPageComponent]
    });
    fixture = TestBed.createComponent(AuthoringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
