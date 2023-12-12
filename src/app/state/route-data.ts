import { Injectable, RendererFactory2, inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { createAction, props, on, createReducer, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, tap } from 'rxjs';
import { AppState } from 'src/app/state';

export interface RouteDataState {
  url: string;
}

const routeDataInitialState: RouteDataState = {
  url: '',
};

// RouteData Actions

export const setRouteData = createAction(
  '[Route Data] Set Route Data',
  props<{ url: string }>()
);

// RouteData Reducer

export const routeDataReducer = createReducer(
  routeDataInitialState,
  on(setRouteData, (state, { url }) => ({ ...state, url }))
);

// RouteData Selectors

const notShowNavigation = [
  '/home',
  '/learn-js-python-page',
  '/authoring-page',
  '/',
];
const notShowFooter = ['/home', '/'];

export const selectRouteData = (state: AppState) => state.routeData;

export const selectRouteDataUrl = (state: AppState) => state.routeData.url;

export const selectShowNavigation = (state: AppState) =>
  !notShowNavigation.includes(state.routeData.url);

export const selectShowFooter = (state: AppState) =>
  !notShowFooter.includes(state.routeData.url);

// RouteData Effects

export const setRouteDataEffect = createEffect(
  (actions$ = inject(Actions), rendererFactory = inject(RendererFactory2)) => {
    return actions$.pipe(
      ofType(setRouteData),
      map((action) => action.url),
      tap((url) => {
        const renderer = rendererFactory.createRenderer(null, null);
        if (notShowNavigation.includes(url)) {
          renderer.removeClass(document.body, 'bg-custom-gray-800');
          renderer.addClass(document.body, 'bg-custom-gray-900');
        } else {
          renderer.removeClass(document.body, 'bg-custom-gray-900');
          renderer.addClass(document.body, 'flex');
          renderer.addClass(document.body, 'flex-col');
          renderer.addClass(document.body, 'min-h-screen');
          renderer.addClass(document.body, 'bg-custom-gray-800');

          const nav = document.getElementsByTagName('nav')[0];
          renderer.removeClass(nav, 'page-header');
          renderer.addClass(nav, 'shadow-custom-shadow');
        }
      })
    );
  },
  { dispatch: false, functional: true }
);

@Injectable({
  providedIn: 'root',
})
export class RouteDataService {
  constructor(private router: Router, private store: Store<AppState>) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        const url = (event as NavigationStart).url;
        this.store.dispatch(setRouteData({ url }));
      });
  }
}
