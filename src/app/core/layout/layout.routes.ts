import { Routes } from '@angular/router';
import { Dashboard } from '../../features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-4',
    pathMatch: 'full',
  },
  {
    path: 'menu-1',
    component: Dashboard,
  },
  {
    path: 'menu-2',
    component: Dashboard,
  },
  {
    path: 'menu-3',
    component: Dashboard,
  },
  {
    path: 'menu-4',
    component: Dashboard,
  },
  {
    path: 'menu-5',
    component: Dashboard,
  },
  {
    path: 'menu-6',
    component: Dashboard,
  },
  {
    path: 'menu-7',
    component: Dashboard,
  },
  {
    path: 'menu-8',
    component: Dashboard,
  },
  {
    path: 'menu-9',
    component: Dashboard,
  },
];
