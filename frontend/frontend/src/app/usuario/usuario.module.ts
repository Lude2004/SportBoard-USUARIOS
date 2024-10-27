import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionUsuarioComponent } from './gestion-usuario/gestion-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    GestionUsuarioComponent
  ]
})
export class UsuarioModule { }
