import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SolicitudViaje } from '../models/solicitudviaje.model';
import 'rxjs/operators/map';

@Injectable({
  providedIn: 'root'
})
export class SolicitudespendientesService {

  solicitudesyviajes: SolicitudViaje[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getSolicitudesyViajes(): any {
    const url = '/api/consultarSolicitudesDeFuncionario/*/';

    this.crearSolicitud();

    /*return this.http.get(url).map(
     json => json
    );*/
  }

  crearSolicitud(): void{

    //const xd = new SolicitudViaje();

    const xd = {
      dependenciasolicitante : 'asdangular',
      encargado : 'asdangular',
      justificacionviaje : 'asdangular',
      lugaresruta : 'asdangular',
      tipoactividad : 'asdangular',
      tipovehiculo : 'asdangular',
      horasalida : '10-10-2020 10:00',
      horaregreso : '10-10-2020 10:00',
      numerocentrofuncional : 3
   }

    console.log(xd);

    const url = '/api/enviarSolicitud';

    this.http.post(url, xd).toPromise().then(
      data => {
        console.log(data)
      }
    );

  }
}

//Cors problem: https://levelup.gitconnected.com/simple-application-with-angular-6-node-js-express-2873304fff0f