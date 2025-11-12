import { Routes } from '@angular/router';
import { ClienteFeature } from './cliente.feature';

export const clienteRoutes = (): Routes => [
  {
    /*importar em path a variavel ENV*/
    path: '',
    component: ClienteFeature,
    children: [
      {
        path: '',
        // loadComponent: () => import().then((p) => p),
      },
    ],
  },
];
