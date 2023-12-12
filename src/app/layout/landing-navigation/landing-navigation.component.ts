import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

import { ButtonVideoComponent, BurgerIconComponent } from 'src/app/ui';
import { LandingNavigationMobileComponent } from 'src/app/layout/landing-navigation-mobile/landing-navigation-mobile.component';

@Component({
  selector: 'layout-landing-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    GoogleSigninButtonModule,
    ButtonVideoComponent,
    BurgerIconComponent,
    LandingNavigationMobileComponent,
  ],
  templateUrl: './landing-navigation.component.html',
  styleUrl: './landing-navigation.component.css',
})
export class LandingNavigationComponent implements AfterViewInit {
  @ViewChild('mobileBurgerIcon') burgerIcon!: ElementRef;
  @ViewChild('mobileMenu') mobileMenu!: ElementRef;
  @ViewChild('mobileBurgerCloseIcon') mobileBurgerIconClose!: ElementRef;
  burgerIconRef!: ElementRef;
  mobileMenuRef!: ElementRef;
  mobileBurgerIconCloseRef!: ElementRef;

  renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    this.burgerIconRef = this.burgerIcon.nativeElement;
    this.mobileMenuRef = this.mobileMenu.nativeElement;
    this.mobileBurgerIconCloseRef = this.mobileBurgerIconClose.nativeElement;
  }

  onBurgerClick() {
    this.renderer.removeClass(this.mobileMenuRef, 'hidden');
  }

  onBurgerIconCloseClick() {
    this.renderer.addClass(this.mobileMenuRef, 'hidden');
  }
}
