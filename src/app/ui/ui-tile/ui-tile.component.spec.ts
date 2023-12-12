import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTileComponent } from './ui-tile.component';

describe('UiTileComponent', () => {
  let component: UiTileComponent;
  let fixture: ComponentFixture<UiTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
