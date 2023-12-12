import { Component } from '@angular/core';
import {
  LandingNavigationComponent,
  LandingContentComponent,
  FooterComponent,
} from 'src/app/layout';

@Component({
  selector: 'layout-landing-layout',
  standalone: true,
  imports: [
    LandingNavigationComponent,
    LandingContentComponent,
    FooterComponent,
  ],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css',
})
export class LandingLayoutComponent {}
