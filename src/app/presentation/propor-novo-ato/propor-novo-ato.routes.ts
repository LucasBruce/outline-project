import { Routes } from '@angular/router';
import { ProporNovoAtoFeature } from './propor-novo-ato.feature';

export const proporNovoAtoRoutes = (): Routes => [
  {
    /*importar em path a variavel ENV*/
    path: '',
    component: ProporNovoAtoFeature,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/propor-novo-ato/propor-novo-ato.component').then((p) => p.ProporNovoAtoComponent),
      },
    ],
  },
];
