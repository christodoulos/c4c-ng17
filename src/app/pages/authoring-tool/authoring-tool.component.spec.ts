import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoringToolComponent } from './authoring-tool.component';

describe('AuthoringToolComponent', () => {
  let component: AuthoringToolComponent;
  let fixture: ComponentFixture<AuthoringToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AuthoringToolComponent]
    });
    fixture = TestBed.createComponent(AuthoringToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
