import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

import { UiBurgerIconComponent, UiBurgerIconCloseComponent } from '@c4c/ui';
import { RouteDataService } from '@c4c/services';
import { AppState, loggedIn, photoUrl, name, email } from '@c4c/state';

@Component({
  selector: 'app-landing-navigation',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    GoogleSigninButtonModule,
    UiBurgerIconComponent,
    UiBurgerIconCloseComponent,
  ],
  templateUrl: './landing-navigation.component.html',
  styleUrls: ['./landing-navigation.component.scss'],
})
export class LandingNavigationComponent {
  url$ = this.routeDataService.url$;
  loggedIn$ = this.store.select(loggedIn);
  photoUrl$ = this.store.select(photoUrl);
  name$ = this.store.select(name);
  email$ = this.store.select(email);
  constructor(
    private routeDataService: RouteDataService,
    private store: Store<AppState>
  ) {}
}
