import { SessionService } from './../services/session.service';
import { OnInit } from '@angular/core';
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


// tslint:disable-next-line: import-spacing
@Component({
  selector: 'app-formulario-solicitud',
  template: `
    <app-menu-toolbar></app-menu-toolbar>

    <div>
      <label class="labelGrande">Solicitud de servicio</label>
      <br>
      <label class="labelMediano">Información general</label>
    </div>

    <app-labelandinput #dependenciaSolicitante label="Dependencia solicitante"></app-labelandinput>
    <app-labelandinput label="Encargado(a)"></app-labelandinput>

    <app-labelandtextarea label="Justificación del viaje"></app-labelandtextarea>
    <app-labelandtextarea label="Lugares a visitar y ruta"></app-labelandtextarea>

    <div>
      <mat-form-field appearance="fill">
        <mat-label>Tipo de actividad</mat-label>
        <mat-select #tipoActividad>
          <mat-option *ngFor="let actividad of tiposActividad" [value]="actividad.actividad">
        {{actividad.actividad}}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <br>

      <mat-form-field appearance="fill">
        <mat-label>Tipo de vehículo</mat-label>
        <mat-select #tipoVehiculo>
          <mat-option *ngFor="let vehiculo of tiposVehiculo" [value]="vehiculo.vehiculo">
        {{vehiculo.vehiculo}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>

    <div>

      <label class="labelMediano">Hora</label>

      <br>

      <mat-form-field class="campoTiempo" appearance="fill">
        <mat-label>Salida</mat-label>
        <input #horaSalida matInput type="datetime-local" >
      </mat-form-field>

      <br>

      <mat-form-field class="campoTiempo" appearance="fill" >
        <mat-label>Regreso</mat-label>
        <input #horaRegreso matInput type="datetime-local">
      </mat-form-field>

    </div>

    <app-labelandinput #centrofuncional label="Número centro funcional"></app-labelandinput>

    <mat-checkbox [(ngModel)]="doyFe">Se da fe de que existen recursos presupuestarios en el centro funcional</mat-checkbox>

    <br>


    <button mat-raised-button [disabled]="!doyFe" (click) = "enviarSolicitudBtnOnClick()">Enviar solicitud</button>

  `,
  styles: [`

    button{

      margin-top: 10px;
      margin-bottom: 50px;
      margin-left: 20px;
      width: 500px;
      height: 75px;

      background: #EF3340;
      font-size: 32px;
      font-weight: 64px;
      font-family: Roboto;

      color: #FFFFFF;
    }

    mat-checkbox{
      display: inline-block;
      margin-left:20px;
      margin-bottom: 10px;
      font-size: 16px;
    }

    mat-form-field{
      width: 500px;
      padding= 0px;
    }

    div{
      margin-left: 20px;
    }

    #redBtn:hover{
      background-color: #b50018;
    }

    .campoTiempo{
      width: 500px;
    }

    .campoTiempo.mat-form-field{
      font-size: 20px;
    }

    .campoTiempo input{
      height: 30px;
    }

    .labelGrande{

      display: inline-block;

      font-size: 40px;

      margin-bottom: 50px;

      color: #002855;
    }

    .labelMediano{
      display: inline-block;
      margin-bottom: 30px;
      font-size: 30px;
      color: #002855;
    }
  `]
})

export class FormularioSolicitudComponent implements OnInit{

  public doyFe: boolean;
  private loggedUser: string;

  tiposActividad: TipoActividad [] = [

    {actividad: 'Administrativo'},
    {actividad: 'Investigación'},
    {actividad: 'Docente'}

  ];

  tiposVehiculo: TipoVehiculo [] = [
    {vehiculo: 'Liviano'},
    {vehiculo: 'Pick up'},
    {vehiculo: 'Microbus'},
    {vehiculo: 'Otro'}
  ];

  constructor(
    private router: Router,
    private snackBar: MatSnackBar) { }

  // tslint:disable-next-line: typedef
  ngOnInit(): void{
    this.doyFe = false;
    this.loggedUser = SessionService.getLoggedUser();
  }

  enviarSolicitudBtnOnClick(): void{
    this.router.navigate(['/menu']);

    /**
     * TODO: Send to database request here
     */

    //Agarrar los inputs


    this.snackBar.open('Solicitud enviada', 'OK', { duration: 2000, });
  }

}

interface TipoActividad {
  actividad: string;
}

interface TipoVehiculo{
  vehiculo: string;
}
