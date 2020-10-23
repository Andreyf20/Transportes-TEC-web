import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../ObjectInterfaces';

@Component({
  selector: 'app-detalles-solicitud-completa',
  templateUrl: './detalles-solicitud-completa.component.html',
  styleUrls: ['./detalles-solicitud-completa.component.scss']
})
export class DetallesSolicitudCompletaComponent implements OnInit {

  public solicitud = SOLICITUDES[0];

  constructor() { }

  ngOnInit(): void {
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
    placaVehiculo: 'ABC-123',
    nombreConductor: 'Guillermo Edgardo'

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
    placaVehiculo: 'CBA-321',
    nombreConductor: 'Edgardo Guillermo'

  }
];
