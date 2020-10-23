import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { PendientesViewComponent } from './pendientes-view/pendientes-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { FormularioSolicitudComponent } from './formulario-solicitud/formulario-solicitud.component';
import { CompletadosViewComponent } from './completados-view/completados-view.component';
import { DetalleSolicitudComponent } from './detalle-solicitud/detalle-solicitud.component';
import { DetallesSolicitudCompletaComponent } from './detalles-solicitud-completa/detalles-solicitud-completa.component';

const routes: Routes = [
  {path: '', component: LoginFormComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'menu', component: MenuprincipalComponent},
  {path: 'solicitar-servicio', component: FormularioSolicitudComponent},
  {path: 'solicitudes-pendientes', component: PendientesViewComponent },
  {path: 'solicitudes-completadas', component: CompletadosViewComponent },
  {path: 'detalles-solicitud-pendiente', component: DetalleSolicitudComponent},
  {path: 'detalles-solicitud-completa', component: DetallesSolicitudCompletaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// tslint:disable-next-line: max-line-length
export const routingComponents = [LoginFormComponent, MenuprincipalComponent, FormularioSolicitudComponent, PendientesViewComponent, CompletadosViewComponent, DetalleSolicitudComponent, DetallesSolicitudCompletaComponent ];
