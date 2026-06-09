import {Routes} from '@angular/router';
import { Analysis } from './steps/analysis';
import { Inspection } from './steps/inspection';
import { Setup } from './steps/setup';
export const routes: Routes = [
  {
    path: 'setup',
    component: Setup,
  },
  {
    path: 'inspection',
    component: Inspection,
  },
  {
    path: 'analysis',
    component: Analysis,
  },
  {
    path: '',
    redirectTo: 'setup',
    pathMatch: 'full',
  },
];
