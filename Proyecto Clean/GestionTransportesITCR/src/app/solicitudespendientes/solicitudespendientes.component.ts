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
    this.servidorService.getSolicitudesyViajes();
  }

  verDetallesOnClick(): void{

    //this.router.navigateByUrl('/verDetallesSolicitud'); // TO DO

  }

}

//Datatable installation: http://l-lin.github.io/angular-datatables/#/getting-started
