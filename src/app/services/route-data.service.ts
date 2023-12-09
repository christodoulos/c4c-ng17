import { Inject, Injectable, RendererFactory2, inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteDataService {
  notShowNavigation = [
    '/home',
    '/learn-js-python-page',
    '/authoring-page',
    '/',
  ];
  notShowFooter = ['/home', '/'];

  showNavigation = new BehaviorSubject<boolean>(false);
  showFooter = new BehaviorSubject<boolean>(false);

  showNavigation$ = this.showNavigation.asObservable();
  showFooter$ = this.showFooter.asObservable();

  rendererFactory = inject(RendererFactory2);
  renderer = this.rendererFactory.createRenderer(null, null);

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        const evt = event as NavigationStart;
        this.showNavigation.next(!this.notShowNavigation.includes(evt.url));
        this.showFooter.next(!this.notShowFooter.includes(evt.url));

        if (this.notShowNavigation.includes(evt.url)) {
          this.renderer.removeClass(document.body, 'bg-custom-gray-800');
          this.renderer.addClass(document.body, 'bg-custom-gray-900');
        } else {
          this.renderer.removeClass(document.body, 'bg-custom-gray-900');
          this.renderer.addClass(document.body, 'flex');
          this.renderer.addClass(document.body, 'flex-col');
          this.renderer.addClass(document.body, 'min-h-screen');
          this.renderer.addClass(document.body, 'bg-custom-gray-800');

          const nav = document.getElementsByTagName('nav')[0];
          this.renderer.removeClass(nav, 'page-header');
          this.renderer.addClass(nav, 'shadow-custom-shadow');
        }
      });
  }
}
