import { Component } from '@angular/core';
import { FooterComponent } from '@c4c/pages';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.css',
})
export class LandingLayoutComponent {}
