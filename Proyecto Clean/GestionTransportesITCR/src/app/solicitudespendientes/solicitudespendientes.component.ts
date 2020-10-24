import { ServidorService } from './../services/servidor.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SolicitudViaje } from '../models/solicitudviaje.model';

@Component({
  selector: 'app-solicitudespendientes',
  templateUrl: './solicitudespendientes.component.html',
  styleUrls: ['./solicitudespendientes.component.scss']
})
export class SolicitudespendientesComponent implements OnInit {

  displayedColumns = [ 'idSolicitud', 'fecha', 'destino' ];

  solicitudesyviajes: SolicitudViaje[] = [];

  constructor(
    private router: Router,
    private servidorService: ServidorService

  ) { }

  ngOnInit(): void {

    this.servidorService.getSolicitudesyViajes().subscribe( (jsonarray) => {

      this.solicitudesyviajes = Object.keys(jsonarray).map((personNamedIndex) => {

        const jsonobject = jsonarray[personNamedIndex];

        const viajeSolicitudObject = new SolicitudViaje(

          jsonobject.dependenciasolicitante,
          jsonobject.encargado,
          jsonobject.justificacionviaje,
          jsonobject.numerocentrofuncional,
          jsonobject.tipoactividad,
          jsonobject.tipovehiculo,
          jsonobject.lugaresruta,
          new Date(JSON.stringify(jsonobject.fechahorasalida).replace('T', ' ').replace('Z', '')),
          new Date(JSON.stringify(jsonobject.fechahoraregreso).replace('T', ' ').replace('Z', '')),
          jsonobject.numsolicitud,
          jsonobject.estadosolicitud,

          jsonobject.kilometrajeinicial,
          jsonobject.kilometrajefinal,
          jsonobject.diferenciakilometraje,
          jsonobject.costoxkilometro,
          jsonobject.descripcion,
          jsonobject.notasconductor,
          jsonobject.tipocombustible,
          jsonobject.costocombustible,
          jsonobject.nombreconductor,
          jsonobject.cedulaconductor

        );

        return viajeSolicitudObject;

      });
      console.log(this.solicitudesyviajes);
    });

    


  }

  verDetallesOnClick(): void{

    //this.router.navigateByUrl('/verDetallesSolicitud'); // TO DO

  }

}

//Datatable installation: http://l-lin.github.io/angular-datatables/#/getting-started
