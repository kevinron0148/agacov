import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistrarAgenciaComponent } from './registrar-agencia/registrar-agencia.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReportesComponent } from './reportes/reportes.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    RegistrarAgenciaComponent,
    PerfilComponent,
    ReportesComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ]
})
export class ComponentsModule { }
