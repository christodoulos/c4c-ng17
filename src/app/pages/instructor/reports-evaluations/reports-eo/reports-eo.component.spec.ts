import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsEoComponent } from './reports-eo.component';

describe('ReportsEoComponent', () => {
  let component: ReportsEoComponent;
  let fixture: ComponentFixture<ReportsEoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReportsEoComponent]
    });
    fixture = TestBed.createComponent(ReportsEoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
