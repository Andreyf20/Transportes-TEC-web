import { SessionService } from '../services/session.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ADMIN, SOLICITANTE, SUPERIOR } from '../CONSTANTS';

@Component({
  selector: 'app-login-form',
  template: `

  <div style="text-align:center;">

    <label id="sysLbl">Sistema de gestión de transportes</label>

    <div>
      <mat-form-field>
        <mat-label>Nombre de usuario</mat-label>
        <input #username matInput id="userInput">
      </mat-form-field>
    </div>

    <div>
      <mat-form-field>
        <mat-label>Contraseña</mat-label>
        <input #pass matInput [type]="'password'">
      </mat-form-field>
    </div>

    <!--Routing with params ref: https://stackoverflow.com/a/42201855-->

    <button mat-raised-button (click) ="loginBtnOnClick(username.value,pass.value)">Ingresar</button>


    <br>
    <img id="teclogo" src="/assets/res/logotec.png">
  </div>
  `,
  styles: [`

  mat-form-field{
    width:655px;
  }

  mat-label{
    font-size: 16px
  }

  input{
    font-size: 32px;
  }

  div{
    margin-bottom:20px;
  }

  label{
    width: 655px;
    height: 70px;
    font-family: Roboto;
    font-size: 64px;
    text-align: center;
    color:      #FFFFFF;
  }

  mat-form-input{
    [style.fontSize.px] = 32;
  }

  button{

    margin-top: 40px;
    margin-bottom: 50px;
    width: 655px;
    height: 75px;

    background: #EF3340;
    font-size: 32px;
    font-weight: 64px;
    font-family: Roboto;

    color: #FFFFFF;

  }

  #sysLbl{
    display: inline-block;

    margin-top: 50px;
    margin-bottom: 80px;

    width: 630px;
    height: 150px;
    left: 50px;
    top: 40px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;

    color: #002855;
  }

  #teclogo{
    width:660;
    height:130px;
  }

  `]
})

export class LoginFormComponent implements OnInit{

  public constructor(
    private titleService: Title,
    private router: Router,
    private snackBar: MatSnackBar ) { }

  public setTitle( newTitle: string): void {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit(): void{
    this.setTitle('Inicio de sesión');
  }

  public loginBtnOnClick(username: string, password: string): void{

    if (username.length === 0 || password.length === 0){
      this.snackBar.open('Hay campos vacíos', 'Entendido', { duration: 2000, });
    }
    /*
    TODO condicion del retorno del stored procedure de la BD
    */
    else{
      /**
       * TODO Validacion de credenciales aqui
       */
      SessionService.setLoggedUser(username);
      SessionService.setUserType(ADMIN);

      this.snackBar.open('User priority: ' + SessionService.getUserType(), 'OK', { duration: 2000, });

      this.router.navigateByUrl('/menu?loggedUser=' + SessionService.getLoggedUser());

    }
  }
}
