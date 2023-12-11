import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';

import { NavigationComponent } from '@c4c/components';
import { FooterComponent } from '@c4c/pages';
import { AuthService } from '@c4c/services';
import {
  AppState,
  selectShowNavigation,
  selectShowFooter,
  RouteDataService,
} from '@c4c/state';
import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
    LandingLayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  authService = inject(AuthService);
  routeDataService = inject(RouteDataService);
  store = inject(Store<AppState>);
  showNavigation$ = this.store.select(selectShowNavigation);
  showFooter$ = this.store.select(selectShowFooter);
}
