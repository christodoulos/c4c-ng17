import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingNavigationComponent } from 'src/app/components/landing-navigation/landing-navigation.component';

@Component({
  selector: 'app-authoring-page',
  standalone: true,
  imports: [CommonModule, LandingNavigationComponent],
  templateUrl: './authoring-page.component.html',
  styleUrls: ['./authoring-page.component.scss']
})
export class AuthoringPageComponent {

}
