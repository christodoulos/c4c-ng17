import { Component } from '@angular/core';
import { ButtonVideoComponent, UiBurgerIconComponent } from '@c4c/ui';

@Component({
  selector: 'app-landing-navigation',
  standalone: true,
  imports: [ButtonVideoComponent, UiBurgerIconComponent],
  templateUrl: './landing-navigation.component.html',
  styleUrl: './landing-navigation.component.css',
})
export class LandingNavigationComponent {}
