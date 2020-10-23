import { TestBed } from '@angular/core/testing';

import { SolicitudespendientesService } from './solicitudespendientes.service';

describe('SolicitudespendientesService', () => {
  let service: SolicitudespendientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudespendientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
