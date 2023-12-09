import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateEoComponent } from './evaluate-eo.component';

describe('EvaluateEoComponent', () => {
  let component: EvaluateEoComponent;
  let fixture: ComponentFixture<EvaluateEoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EvaluateEoComponent]
    });
    fixture = TestBed.createComponent(EvaluateEoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
