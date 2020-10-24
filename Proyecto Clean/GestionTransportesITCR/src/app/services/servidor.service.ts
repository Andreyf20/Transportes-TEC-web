import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SolicitudViaje } from '../models/solicitudviaje.model';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  private url = 'http://localhost:';
  private port = '5000';

  private urlplusport = this.url + this.port;

  constructor(
    private http: HttpClient
  ) { }

  crearSolicitud(nuevaSolicitud: SolicitudViaje): any{
    console.log(nuevaSolicitud);
    const url = '/api/enviarSolicitud';
    return this.http.post(url, nuevaSolicitud).toPromise().then(res => {
      console.log(res);
    });
  }

  getSolicitudesyViajes(): any {
    const url = '/api/consultarSolicitudesDeFuncionario/*/';

    // return this.http.get(url);
    console.log(url);
    this.http.get(url).subscribe(json => { console.log(json) });
  }

}
