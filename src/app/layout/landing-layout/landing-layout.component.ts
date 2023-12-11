import { Component } from '@angular/core';
import {
  LandingNavigationComponent,
  LandingContentComponent,
} from '@c4c/layout';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [LandingNavigationComponent, LandingContentComponent],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css',
})
export class LandingLayoutComponent {}
