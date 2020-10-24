import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menutoolbar',
  templateUrl: './menutoolbar.component.html',
  styleUrls: ['./menutoolbar.component.scss']
})
export class MenutoolbarComponent implements OnInit {

  
  public loggedUser: string;
  public showReportes: boolean;

  constructor(
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private titleService: Title,
    private router: Router
    ) {
    iconRegistry.addSvgIcon(
        'logout',
        sanitizer.bypassSecurityTrustResourceUrl('../../assets/res/logoutIcon.svg'));
  }

  setTitle( newTitle: string): void {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit(): void {
    this.setTitle('Solicitar servicio');
  }

  logout(): void{
    return undefined;
  }

  solicitarServicio(): void{
    this.router.navigateByUrl('/solicitar-servicio');
  }

}
