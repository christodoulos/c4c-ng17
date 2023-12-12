import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

import { MenuItem } from 'src/app/interfaces/menu-item';
import { ButtonVideoComponent, BurgerIconComponent } from 'src/app/ui';
import { LandingNavigationMobileComponent } from 'src/app/layout/landing-navigation-mobile/landing-navigation-mobile.component';

@Component({
  selector: 'layout-landing-navigation',
  standalone: true,
  imports: [
    CommonModule,
    GoogleSigninButtonModule,
    ButtonVideoComponent,
    BurgerIconComponent,
    LandingNavigationMobileComponent,
  ],
  templateUrl: './landing-navigation.component.html',
  styleUrl: './landing-navigation.component.css',
})
export class LandingNavigationComponent {
  @Input() leftMenuItems: MenuItem[] = [];
  @Input() rightMenuItems: MenuItem[] = [];
}
