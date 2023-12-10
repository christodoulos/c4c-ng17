import { SocialUser } from '@abacritt/angularx-social-login';
import {
  createAction,
  props,
  createReducer,
  on,
  createSelector,
} from '@ngrx/store';
import { AppState } from '@c4c/state';
import { state } from '@angular/animations';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { map, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// Auth State

export interface AuthState {
  loggedIn: boolean;
  user: SocialUser | null;
}

export const authInitialState: AuthState = {
  loggedIn: false,
  user: null,
};

// Auth Actions

export const login = createAction(
  '[Auth] Login',
  props<{ user: SocialUser }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: SocialUser }>()
);

export const logout = createAction('[Auth] Logout');

// Auth Reducer

export const authReducer = createReducer(
  authInitialState,
  on(loginSuccess, (state, { user }) => ({ loggedIn: true, user })),
  on(logout, (state) => ({ loggedIn: false, user: null }))
);

// Auth Selectors

export const selectAuthState = (state: AppState) => state.auth;

export const loggedIn = (state: AppState) => state.auth.loggedIn;

export const user = (state: AppState) => state.auth.user;

export const name = (state: AppState) => state.auth.user?.name;

export const email = (state: AppState) => state.auth.user?.email;

export const photoUrl = (state: AppState) => state.auth.user?.photoUrl;

// Auth Effects

export const loginEffect = createEffect(
  (actions$ = inject(Actions), http = inject(HttpClient)) => {
    return actions$.pipe(
      ofType(login),
      tap((action) => console.log(action)),
      map((action) => action.user.idToken),
      map((idToken) => {
        console.log(idToken);
        http
          .post<string>('http://localhost:6789/api/auth/google-login', {
            idToken,
          })
          .pipe(
            map((res) => {
              console.log(res);
              return res;
            })
          )
          .subscribe();
      })
    );
  },
  { dispatch: false, functional: true }
);
