import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import { authReducer, routeDataReducer, setRouteDataEffect } from '@c4c/state';

export const appConfig: ApplicationConfig = {
  providers: [
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
    provideHttpClient(withFetch()),
    provideStore({ auth: authReducer, routeData: routeDataReducer }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([{ setRouteDataEffect }]),
  ],
};
