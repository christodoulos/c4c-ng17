import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
export class LandingNavigationComponent {}
