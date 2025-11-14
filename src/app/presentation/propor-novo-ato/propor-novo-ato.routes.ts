import { Routes } from '@angular/router';

// prettier-ignore
export const proporNovoAtoRoutes = (): Routes => [
  {
    path: 'propor-novo-ato',
    loadChildren: () =>
      import('./propor-novo-ato.module').then(
        (m) => m.ProporNovoAtoModule
      )
  }
];
