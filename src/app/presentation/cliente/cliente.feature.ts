import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteService } from '../../core/cliente/services/cliente.service';

@Component({
  standalone: true,
  selector: 'app-root-cliente',
  imports: [RouterOutlet],
  providers: [ClienteService],
  template: `<router-outlet></router-outlet>`,
})
export class ClienteFeature {}
