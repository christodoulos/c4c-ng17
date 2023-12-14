import { SocialUser } from '@abacritt/angularx-social-login';
import { createAction, props, createReducer, on, Store } from '@ngrx/store';
import { AppState } from 'src/app/state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@c4c/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../interfaces/user';

// Auth State

export interface AuthState {
  loggedIn: boolean;
  id?: string;
  email?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
  category?: string;
  institution?: string;
  linkedin?: string;
}

export const authInitialState: AuthState = {
  loggedIn: false,
};

// Auth Actions

export const login = createAction(
  '[Auth] Login',
  props<{ user: SocialUser }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: AuthState }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

export const registerUser = createAction(
  '[Auth] Register User',
  props<{ user: User }>()
);

export const registerUserSuccess = createAction(
  '[Auth] Register User Success',
  props<{ user: User }>()
);

export const registerUserFailure = createAction(
  '[Auth] Register User Failure',
  props<{ error: string }>()
);

// Auth Reducer

export const authReducer = createReducer(
  authInitialState,
  on(loginSuccess, (state, { user }) => ({ ...state, ...user })),
  on(logout, (_) => ({ loggedIn: false })),
  on(registerUserSuccess, (state, { user }) => ({ ...state, ...user }))
);

// Auth Selectors

export const selectAuthState = (state: AppState) => state.auth;

export const loggedIn = (state: AppState) => state.auth.loggedIn;

export const id = (state: AppState) => state.auth.id;

export const email = (state: AppState) => state.auth.email;

export const name = (state: AppState) => state.auth.name;

export const firstName = (state: AppState) => state.auth.firstName;

export const lastName = (state: AppState) => state.auth.lastName;

export const photoUrl = (state: AppState) => state.auth.photoUrl;

export const category = (state: AppState) => state.auth.category;

export const institution = (state: AppState) => state.auth.institution;

export const linkedin = (state: AppState) => state.auth.linkedin;

export const isNewUser = (state: AppState) => state.auth.category === null;

// Auth Effects

export const loginEffect = createEffect(
  (
    actions$ = inject(Actions),
    http = inject(HttpClient),
    jwtHelperService = inject(JwtHelperService)
  ) => {
    return actions$.pipe(
      ofType(login),
      switchMap((action) =>
        http
          .post<{ access_token: string }>(
            `${environment.apiUrl}/auth/google-login`,
            {
              idToken: action.user.idToken,
            }
          )
          .pipe(
            map((res) => {
              localStorage.setItem('access_token', res.access_token);
              const userFromToken = jwtHelperService.decodeToken(
                res.access_token
              ).user as AuthState;
              return loginSuccess({ user: userFromToken });
            }),
            catchError(() =>
              of(loginFailure({ error: 'Google login failure' }))
            )
          )
      )
    );
  },
  { functional: true }
);

export const loginSuccessEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(loginSuccess),
      map((action) => action.user.category),
      tap((userCategory) => {
        if (!userCategory) {
          router.navigateByUrl('/c4c/register');
        } else {
          router.navigateByUrl(`/c4c/${userCategory}/dashboard`);
        }
      })
    );
  },
  { dispatch: false, functional: true }
);

export const registerUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    http = inject(HttpClient),
    router = inject(Router)
  ) => {
    return actions$.pipe(
      ofType(registerUser),
      map((action) => action.user),
      switchMap((user) =>
        http
          .post<AuthState>(`${environment.apiUrl}/user/register`, {
            ...user,
          })
          .pipe(
            map((res) => registerUserSuccess({ user: res })),
            catchError(() => of(loginFailure({ error: 'Register failure' }))),
            tap((user) => console.log(user)),
            tap(() => router.navigateByUrl('/c4c/user/dashboard'))
          )
      )
    );
  },
  { functional: true }
);
