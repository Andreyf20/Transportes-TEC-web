import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSolicitudCompletaComponent } from './detalles-solicitud-completa.component';

describe('DetallesSolicitudCompletaComponent', () => {
  let component: DetallesSolicitudCompletaComponent;
  let fixture: ComponentFixture<DetallesSolicitudCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesSolicitudCompletaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesSolicitudCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
