import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestilsonService } from '../../core/services/testilson/testilson.service';
import { ClienteService } from '../../core/services/cliente/cliente.service';

@Component({
  standalone: true,
  selector: 'app-root-cliente',
  imports: [RouterOutlet],
  providers: [TestilsonService, ClienteService],
  template: `<router-outlet></router-outlet>`,
})
export class ClienteFeature {}
