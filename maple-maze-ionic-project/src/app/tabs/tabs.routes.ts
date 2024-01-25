import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'camera',
        loadComponent: () =>
          import('../camera/camera.page').then((m) => m.CameraPage),
      },
      {
        path: 'geolocation',
        loadComponent: () =>
          import('../geolocation/geolocation.page').then((m) => m.GeolocationPage),
      },
      {
        path: 'battery',
        loadComponent: () =>
          import('../battery/battery.page').then((m) => m.BatteryPage),
      },
      {
        path: 'walk',
        loadComponent: () =>
          import('../walk/walk.page').then((m) => m.WalkPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
