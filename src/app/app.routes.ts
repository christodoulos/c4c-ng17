import { Routes } from '@angular/router';

import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { LandingAuthoringToolComponent } from './layout/landing-authoring-tool/landing-authoring-tool.component';

export const routes: Routes = [
  { path: '', redirectTo: 'c4c', pathMatch: 'full' },
  { path: 'c4c', component: LandingLayoutComponent },
  { path: 'c4c/authoring', component: LandingAuthoringToolComponent },
];
