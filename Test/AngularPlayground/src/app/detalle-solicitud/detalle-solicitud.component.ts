import { SessionService } from './../services/session.service';
import { ADMIN, SUPERIOR, SOLICITANTE } from './../CONSTANTS';
import { Component, OnInit } from '@angular/core';
import { Solicitud } from './../ObjectInterfaces';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-solicitud',
  templateUrl: './detalle-solicitud.component.html',
  styleUrls: ['./detalle-solicitud.component.scss']
})
export class DetalleSolicitudComponent implements OnInit{

  protected showSuperiorDiv: boolean;
  protected showAdminDiv: boolean;

  public conConductor: boolean;

  solicitud = SOLICITUDES[0];

  // Iconos botones de aceptar y rechazar

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'check',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/checkIcon.svg'));

    iconRegistry.addSvgIcon(
      'x',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/xIcon.svg'));
  }

  ngOnInit(): void {
    this.conConductor = false;
    this.showSuperiorDiv = (SessionService.getUserType() === SUPERIOR);
    this.showAdminDiv =  (SessionService.getUserType() === ADMIN);
  }

  public showSuperiorStuff(): boolean{

    return this.showSuperiorDiv;
  }

  public showAdminStuff(): boolean{

    return this.showAdminDiv;
  }

  public matCheckboxOnChange(): void{

  }

  public aprobarBtnOnClick(): void{

  }

  public rechazarBtnOnClick(): void{

  }

}

const SOLICITUDES: Solicitud[] = [
  {
    idSolicitud: 15723784,
    dependenciaSolictante: 'Vicerrectoria de administracion',
    encargado: 'Pedrito Chaves',
    justificacion: 'Gira al Museo de los Niños',
    lugaresRuta: 'Museo de los Niños pasando por el Hospital Mexico',
    tipoActividad: 'Gira',
    tipoVehiculo: 'Buseta',
    numCentroFuncional: 152,
    fechaHoraSalida: new Date('10/13/2020 10:00'),
    fechaHoraRegreso: new Date('10/13/2020 18:00'),
    placaVehiculo: 'NO ASIGNADO',
    nombreConductor: 'NO ASIGNADO'
  },
  {
    idSolicitud: 2,
    dependenciaSolictante: 'Vicerrectoria de administracion',
    encargado: 'Pedrito Chaves',
    justificacion: 'Gira al Museo de los Niños',
    lugaresRuta: 'Museo de los Niños pasando por el Hospital Mexico',
    tipoActividad: 'Gira',
    tipoVehiculo: 'Buseta',
    numCentroFuncional: 152,
    fechaHoraSalida: new Date('10/13/2020 10:00'),
    fechaHoraRegreso: new Date('10/13/2020 18:00'),
    placaVehiculo: 'NO ASIGNADO',
    nombreConductor: 'NO ASIGNADO'
  }
];
