import { Injectable, inject } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { AppState, login, logout } from '@c4c/state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  socialAuthService = inject(SocialAuthService);
  store = inject(Store<AppState>);
  http = inject(HttpClient);

  constructor() {
    this.socialAuthService.authState.subscribe((user) => {
      if (user) {
        console.log('User: ', user);
        this.store.dispatch(login({ user }));
      }
    });
  }

  signOut() {
    this.socialAuthService.signOut();
    this.store.dispatch(logout());
  }
}
