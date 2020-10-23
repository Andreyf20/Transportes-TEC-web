import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudInfoCardComponent } from './solicitud-info-card.component';

describe('SolicitudInfoCardComponent', () => {
  let component: SolicitudInfoCardComponent;
  let fixture: ComponentFixture<SolicitudInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
