import { FormularioviewComponent } from './formularioview/formularioview.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LoginviewComponent } from './loginview/loginview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: LoginviewComponent },
  {path: 'login', component: LoginviewComponent },
  {path: 'menu', component: MenuprincipalComponent },
  {path: 'solicitar-servicio', component: FormularioviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ LoginviewComponent, MenuprincipalComponent, FormularioviewComponent ];
