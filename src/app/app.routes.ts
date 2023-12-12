import { Routes } from '@angular/router';

import { LandingLayoutComponent } from './layout/landing-layout/landing-layout.component';
import { LandingAuthoringToolComponent } from './layout/landing-authoring-tool/landing-authoring-tool.component';
import { LandingLearningComponent } from './layout/landing-learning/landing-learning.component';
import { LandingPlansComponent } from './layout/landing-plans/landing-plans.component';

export const routes: Routes = [
  { path: '', redirectTo: 'c4c', pathMatch: 'full' },
  { path: 'c4c', component: LandingLayoutComponent },
  { path: 'c4c/authoring', component: LandingAuthoringToolComponent },
  { path: 'c4c/learning', component: LandingLearningComponent },
  { path: 'c4c/plans', component: LandingPlansComponent },
];
