import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu-4',
    pathMatch: 'full',
  },
  {
    path: 'menu-1',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'menu-2',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'menu-3',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'menu-4',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'menu-5',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'menu-6',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'menu-7',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'menu-8',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'menu-9',
    loadComponent: () => import('../features/dashboard/dashboard').then((m) => m.Dashboard),
  },
];
