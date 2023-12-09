import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEvaluationsComponent } from './reports-evaluations.component';

describe('ReportsEvaluationsComponent', () => {
  let component: ReportsEvaluationsComponent;
  let fixture: ComponentFixture<ReportsEvaluationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsEvaluationsComponent]
    });
    fixture = TestBed.createComponent(ReportsEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
