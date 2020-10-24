import { Component, setTestabilityGetter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AngularPlayground';

  public constructor(
    private titleService: Title,
  ) { }

  public setTitle( newTitle: string): void {
    this.titleService.setTitle( newTitle );
  }

}

