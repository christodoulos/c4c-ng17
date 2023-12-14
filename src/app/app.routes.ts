import { Routes } from '@angular/router';

import { registerGuardGuard } from './guards';

import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { LandingAuthoringToolComponent } from './layout/landing-authoring-tool/landing-authoring-tool.component';
import { LandingLearningComponent } from './layout/landing-learning/landing-learning.component';
import { LandingPlansComponent } from './layout/landing-plans/landing-plans.component';
import { LandingRegisterComponent } from './layout/landing-register/landing-register.component';

export const routes: Routes = [
  { path: 'c4c', component: LandingLayoutComponent },
  { path: 'c4c/authoring', component: LandingAuthoringToolComponent },
  { path: 'c4c/learning', component: LandingLearningComponent },
  { path: 'c4c/plans', component: LandingPlansComponent },
  {
    path: 'c4c/register',
    component: LandingRegisterComponent,
    canActivate: [registerGuardGuard],
  },
  { path: '', redirectTo: 'c4c', pathMatch: 'full' },
];
