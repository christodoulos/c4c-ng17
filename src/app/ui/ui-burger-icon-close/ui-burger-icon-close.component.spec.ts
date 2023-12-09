import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBurgerIconCloseComponent } from './ui-burger-icon-close.component';

describe('UiBurgerIconCloseComponent', () => {
  let component: UiBurgerIconCloseComponent;
  let fixture: ComponentFixture<UiBurgerIconCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBurgerIconCloseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiBurgerIconCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
