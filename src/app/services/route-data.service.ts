import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AppState, setRouteData } from '@c4c/state';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteDataService {
  constructor(private router: Router, private store: Store<AppState>) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        const evt = event as NavigationStart;
        this.store.dispatch(setRouteData({ url: evt.url }));
      });
  }
}
