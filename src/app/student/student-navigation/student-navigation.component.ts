import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, photoUrl } from '@c4c/state';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-student-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-navigation.component.html',
  styleUrl: './student-navigation.component.css',
})
export class StudentNavigationComponent {
  store = inject(Store<AppState>);
  photoUrl$ = this.store.select(photoUrl);

  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  mobileMenuRef!: ElementRef;
  renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    this.mobileMenuRef = this.mobileMenu.nativeElement;
  }

  onBurgerClick() {
    this.renderer.removeClass(this.mobileMenuRef, 'hidden');
  }

  onBurgerIconCloseClick() {
    this.renderer.addClass(this.mobileMenuRef, 'hidden');
  }
}
