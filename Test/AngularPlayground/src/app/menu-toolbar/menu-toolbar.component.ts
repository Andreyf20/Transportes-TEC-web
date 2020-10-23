import { SessionService } from './../services/session.service';
import { ADMIN, SOLICITANTE, SUPERIOR } from './../CONSTANTS';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-menu-toolbar',
  template: `
    <p>
      <mat-toolbar color="primary" style="margin-bottom: 30px; min-width: 300px;">

        <mat-toolbar-row>
          <h1 style="padding: 0 16px; font-size: 40px;" *ngIf="(loggedUser != '') && (loggedUser != null) && (loggedUser != ' ') else elseBlock">Bienvenido {{loggedUser}}</h1>
          <ng-template style="margin-left:16px;padding: 0 16px; font-size: 40px;" #elseBlock>
            <h1 style="padding: 0 16px; font-size: 40px;">Bienvenido invitado</h1>
          </ng-template>
        </mat-toolbar-row>

        <mat-toolbar-row style="background-color: #EF3340">
        <a routerLink='/solicitar-servicio'>
          <button mat-button>Solicitar servicio</button>
        </a>

        <a *ngIf="showReportes">
          <button mat-button>Reportes</button>
        </a>

        <mat-expansion-panel class="mat-elevation-z0">

            <mat-expansion-panel-header>
              <mat-panel-title>
                Solicitudes
              </mat-panel-title>
            </mat-expansion-panel-header>

            <ng-template matExpansionPanelContent>

              <mat-list>

                <a class="anchorSolicitudes" routerLink="/solicitudes-pendientes">
                  <mat-list-item class= "solicitudItem"> Pendientes </mat-list-item>
                </a>

                <a class="anchorSolicitudes" routerLink="/solicitudes-completadas">
                  <mat-list-item class= "solicitudItem"> Completadas </mat-list-item>
                </a>

              </mat-list>

            </ng-template>
        </mat-expansion-panel>

        <!--No poner componentes despues de este tag ya que van a pegarse al lado derecho-->
        <span class="right-spacer"></span>
          <span flex style="height:100%;">
          <a routerLink="/login">
            <button mat-button (click)='logout()'>
              <mat-icon svgIcon="logout" aria-hidden="false" aria-label="Cerrar sesion"></mat-icon>
            </button>
          </a>
          </span>
        </mat-toolbar-row>
      </mat-toolbar>
    </p>
  `,
  styles: [`

    .anchorSolicitudes{
      text-decoration:none;
    }

    .solicitudItem{
      color:White;
    }

    .solicitudItem:hover{
      background-color:#ff6c6b;
    }

    mat-panel-title{
      font-size: 24px
    }

    mat-expansion-panel{
      border-radius:0%;
      background-color: #EF3340;
      padding=0px;
    }

    mat-panel-title{
      color: White;
    }

    a{
      height:100%;
    }

    mat-toolbar-row{
      padding: 0px;
    }

    button{
      height:100%;
      font-size: 24px;
      border-radius: 0px;
      color: white;
      background-color: #EF3340;
    }

    .right-spacer {
      flex: 1 1 auto;
    }

    `]
})

export class MenuToolbarComponent implements OnInit{

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'logout',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/logoutIcon.svg'));
  }

  public loggedUser: string;

  public showReportes: boolean;

  ngOnInit(): void {

    this.showReportes = (SessionService.getUserType() === ADMIN);
    this.loggedUser = SessionService.getLoggedUser();
  }

  public logout(): void{
    SessionService.setLoggedUser('');
    SessionService.setUserType(undefined);
  }
}
