import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '@c4c/components';
import { FooterComponent } from '@c4c/pages';
import { RouteDataService } from '@c4c/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  routeDataService = inject(RouteDataService);
  showNavigation$ = this.routeDataService.showNavigation$;
  showFooter$ = this.routeDataService.showFooter$;
}
