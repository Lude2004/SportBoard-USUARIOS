import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';

const routes: Routes = [
  { path: 'gestion-usuario', component: GestionUsuarioComponent },
  { path: '', redirectTo: 'gestion-usuario', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
