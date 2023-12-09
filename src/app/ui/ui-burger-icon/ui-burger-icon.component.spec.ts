import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBurgerIconComponent } from './ui-burger-icon.component';

describe('UiBurgerIconComponent', () => {
  let component: UiBurgerIconComponent;
  let fixture: ComponentFixture<UiBurgerIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBurgerIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiBurgerIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
