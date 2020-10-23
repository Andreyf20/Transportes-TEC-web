import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completados-view',
  templateUrl: './completados-view.component.html',
  styleUrls: ['./completados-view.component.scss']
})
export class CompletadosViewComponent implements OnInit{

  displayedColumns = [ 'idSolicitud', 'fecha', 'destino' ];

  completadas: SolictitudCompletada[] = [];


  public constructor(
    private router: Router,
   ) { }

  ngOnInit(): void {
    this.completadas = COMPLETADOS;

  }

  public verDetallesSolicitudCompletaOnClick(): void{
    this.router.navigateByUrl('/detalles-solicitud-completa');

  }

}


export interface SolictitudCompletada {

  idSolicitud: number;
  fecha: Date;
  destino: string;
  highlighted?: boolean;
  hovered?: boolean;

}

const COMPLETADOS: SolictitudCompletada[] = [

  { idSolicitud: 1, fecha: new Date('09/09/2020'), destino: 'Museo de los Niños' },
  { idSolicitud: 2, fecha: new Date('09/15/2020'), destino: 'San Jose' },
  { idSolicitud: 3, fecha: new Date('09/30/2020'), destino: 'Escazu'  }

];

