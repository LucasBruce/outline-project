import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProporNovoAtoCardComponent } from './components/propor-novo-ato-card/propor-novo-ato-card.component';

const control = {
  data: { regraAcessoPagina: [] },
  canActivate: []
};

export const proporNovoAtoChildrenRoutes: Routes = [
  {
    
    path: '',
    redirectTo: 'pesquisar',
    pathMatch: 'full'
  },
  
  {
    path: 'pesquisar',
    component: ProporNovoAtoCardComponent,
    ...control
  }
];

@NgModule({
  declarations: [
    ProporNovoAtoCardComponent
  ],
  imports: [
    RouterModule.forChild(proporNovoAtoChildrenRoutes),
    CommonModule
  ]
})
export class ProporNovoAtoModule { }
