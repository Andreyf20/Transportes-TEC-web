import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.scss']
})
export class LoginviewComponent implements OnInit {

  constructor(
    private titleService: Title,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  public setTitle( newTitle: string): void {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit(): void {
    this.setTitle('Inicio de sesión');
  }

  public loginBtnOnClick(username: string, password: string): void{
    if (username.length === 0 || password.length === 0){

      this.snackBar.open('Hay campos vacíos', 'Entendido', { duration: 2000, });

    }else{
      this.router.navigateByUrl('/menu');
    }

  }
}
