import {
  ApplicationConfig,
  isDevMode,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { JwtModule } from '@auth0/angular-jwt';

import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import {
  authReducer,
  routeDataReducer,
  setRouteDataEffect,
  loginEffect,
  logoutEffect,
  loginSuccessEffect,
  registerUserEffect,
} from 'src/app/state';
import { routes } from 'src/app/app.routes';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideRouter(routes),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '878306325827-jq0j94e1sck30tptr7oiuu55fib3pu14.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (err: any) => {
          console.log(err);
        },
      } as SocialAuthServiceConfig,
    },
    importProvidersFrom(
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          allowedDomains: ['localhost:6789'],
        },
      })
    ),
    provideStore({ auth: authReducer, routeData: routeDataReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([
      {
        setRouteDataEffect,
        loginEffect,
        logoutEffect,
        loginSuccessEffect,
        registerUserEffect,
      },
    ]),
  ],
};
