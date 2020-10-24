import { SessionService } from './services/session.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DataTablesModule } from 'angular-datatables';

import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { FormularioSolicitudComponent } from './formulario-solicitud/formulario-solicitud.component';
import { LabelandinputComponent } from './labelandinput/labelandinput.component';
import { LabelandtextareaComponent } from './labelandtextarea/labelandtextarea.component';
import { PendientesViewComponent } from './pendientes-view/pendientes-view.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { SolicitudInfoCardComponent } from './solicitud-info-card/solicitud-info-card.component';
import { ReportesViewComponent } from './reportes-view/reportes-view.component';
import { DetallesSolicitudCompletaComponent } from './detalles-solicitud-completa/detalles-solicitud-completa.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MenuToolbarComponent,
    FormularioSolicitudComponent,
    LabelandinputComponent,
    LabelandtextareaComponent,
    PendientesViewComponent,
    MenuprincipalComponent,
    SolicitudInfoCardComponent,
    ReportesViewComponent,
    DetallesSolicitudCompletaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    DataTablesModule,
    HttpClientModule,

  ],
  providers: [
    Title,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
