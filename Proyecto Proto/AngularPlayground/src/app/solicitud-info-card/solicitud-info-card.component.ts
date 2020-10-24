import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solicitud-info-card',
  templateUrl: './solicitud-info-card.component.html',
  styleUrls: ['./solicitud-info-card.component.scss']
})
export class SolicitudInfoCardComponent {

  @Input() header: string;

}
