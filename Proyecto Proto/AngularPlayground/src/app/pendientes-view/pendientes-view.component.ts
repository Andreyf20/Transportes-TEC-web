import {  Component, OnInit  } from '@angular/core';
import { SolicitudViaje } from '../models/solicitudviaje.model';
import { SolicitudespendientesService } from '../services/solicitudespendientes.service';

@Component({
  selector: 'app-pendientes-view',
  templateUrl: './pendientes-view.component.html',
  styleUrls: ['./pendientes-view.component.scss']
})
export class PendientesViewComponent implements OnInit{

  displayedColumns = [ 'idSolicitud', 'fecha', 'destino' ];

  solicitudesyviajes: SolicitudViaje[] = [];

  constructor(
    private solPendientesService: SolicitudespendientesService
  ){}

  ngOnInit(): void {
    this.solPendientesService.getSolicitudesyViajes().subscribe(
      json => {
        this.solicitudesyviajes = json;
      }
    );
  }

}

export interface SolicitudPendiente {

  idSolicitud: number;
  fecha: Date;
  destino: string;

}

/*
const SOLICITUDES: SolicitudPendiente[] = [

  { idSolicitud: 4, fecha: new Date('11/09/2020'), destino: 'Museo de los Niños' },
  { idSolicitud: 5, fecha: new Date('11/15/2020'), destino: 'San Jose' },
  { idSolicitud: 6, fecha: new Date('12/30/2020'), destino: 'Escazu'  }

];
*/
