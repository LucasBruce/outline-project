import { InjectionToken } from '@angular/core';
import { ICliente } from './cliente.interface';

export const clienteToken = new InjectionToken<ICliente>('Cliente');