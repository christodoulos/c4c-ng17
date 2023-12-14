import { Component } from '@angular/core';
import { LandingNavigationComponent } from '../landing-navigation/landing-navigation.component';
import { LandingRegisterFormComponent } from '../landing-register-form/landing-register-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'layout-landing-register',
  standalone: true,
  imports: [
    LandingNavigationComponent,
    LandingRegisterFormComponent,
    FooterComponent,
  ],
  templateUrl: './landing-register.component.html',
  styleUrl: './landing-register.component.css',
})
export class LandingRegisterComponent {}
