import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudViaje } from '../models/solicitudviaje.model';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  constructor(
    private http: HttpClient
  ) { }

  getSolicitudesPendientes(): any{
    const url = '/api/consultarSolicitudesDeFuncionario/*/';
    console.log(url);
    return this.http.get(url);
  }

  crearSolicitud(nuevaSolicitud: SolicitudViaje): any{
    console.log(nuevaSolicitud);
    const url = '/api/enviarSolicitud/';
    return this.http.post(url, nuevaSolicitud).toPromise().then(res => {
      console.log(res);
    });
  }
}
