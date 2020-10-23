import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultarviajesService {


  constructor(
    private http: HttpClient
  ) { }

  getSolicitudesPendientes(): any{
    const url = '/api/consultarSolicitudesDeFuncionario/*/';
    console.log(url);
    return this.http.get(url);
  }
}
