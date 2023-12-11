import { Routes } from '@angular/router';

import { LandingLayoutComponent } from 'src/app/layout/landing-layout/landing-layout.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'home/pricing', component: PricingComponent },
  { path: '**', component: LandingLayoutComponent },
];
