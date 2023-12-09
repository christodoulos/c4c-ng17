import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnJsPythonPageComponent } from './learn-js-python-page.component';

describe('LearnJsPythonPageComponent', () => {
  let component: LearnJsPythonPageComponent;
  let fixture: ComponentFixture<LearnJsPythonPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LearnJsPythonPageComponent]
    });
    fixture = TestBed.createComponent(LearnJsPythonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
