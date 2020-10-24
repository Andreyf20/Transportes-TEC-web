import { SolicitudViaje } from './../models/solicitudviaje.model';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-formularioview',
  templateUrl: './formularioview.component.html',
  styleUrls: ['./formularioview.component.scss']
})
export class FormularioviewComponent implements OnInit {

  public doyFe: boolean;

  public loggedUser: string;

  public showReportes: boolean;

  public tiposActividad: TipoActividad[] = tiposActividad;

  public tiposVehiculo: TipoVehiculo[] = tiposVehiculo;

  // Datos de los campos
  public dependenciaSolicitante: string;
  public encargado: string;
  public justificacionViaje: string;
  public lugaresRuta: string;
  public tipoActividad: string;
  public tipoVehiculo: string;
  public horaSalida: Date;
  public horaRegreso: Date;
  public numCentroFuncional: number;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private snackBar: MatSnackBar) {
    iconRegistry.addSvgIcon('logout', sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/logoutIcon.svg'));
  }

  ngOnInit(): void {
    this.doyFe = false;
  }

  logout(): void{
    return undefined;
  }

  enviarSolicitudBtnOnClick(): void{

    this.snackBar.open('Hay campos vacíos', 'Entendido', { duration: 2000, });

    const nuevaSolicitud: SolicitudViaje = new SolicitudViaje(
      this.dependenciaSolicitante,
      this.encargado,
      this.justificacionViaje,
      this.numCentroFuncional,
      this.tipoActividad,
      this.tipoVehiculo,
      this.lugaresRuta,
      this.horaSalida,
      this.horaRegreso,
    );

    console.log((nuevaSolicitud.encargado === undefined));

  }

}


const tiposActividad: TipoActividad [] = [

  {actividad: 'Administrativo'},
  {actividad: 'Investigación'},
  {actividad: 'Docente'}

];

const tiposVehiculo: TipoVehiculo [] = [
  {vehiculo: 'Liviano'},
  {vehiculo: 'Pick up'},
  {vehiculo: 'Microbus'},
  {vehiculo: 'Otro'}
];

interface TipoActividad {
  actividad: string;
}

interface TipoVehiculo{
  vehiculo: string;
}
