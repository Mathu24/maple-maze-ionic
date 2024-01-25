import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'geolocation',
    loadComponent: () => import('./geolocation/geolocation.page').then( m => m.GeolocationPage)
  },
  {
    path: 'battery',
    loadComponent: () => import('./battery/battery.page').then( m => m.BatteryPage)
  },
  {
    path: 'turnaround',
    loadComponent: () => import('./turnaround/turnaround.page').then( m => m.TurnaroundPage)
  },
  {
    path: 'walk',
    loadComponent: () => import('./walk/walk.page').then( m => m.WalkPage)
  },

];
