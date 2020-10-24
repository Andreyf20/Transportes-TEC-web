import { SolicitudViaje } from './../../models/solicitudviaje.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultasServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getSolicitudesPendientes(): any{
    const url = '/api/consultarSolicitudesDeFuncionario/*/';
    console.log(url);
    return this.http.get(url);
  }

  crearSolicitud(nuevaSolicitud: SolicitudViaje): any{
    const url = '/api/enviarSolicitud/';
    return this.http.post(url, nuevaSolicitud);
  }
}
