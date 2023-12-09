import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingNavigationComponent } from '@c4c/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LandingNavigationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
