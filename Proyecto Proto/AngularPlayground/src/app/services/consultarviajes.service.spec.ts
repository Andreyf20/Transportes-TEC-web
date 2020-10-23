import { TestBed } from '@angular/core/testing';

import { ConsultarviajesService } from './consultarviajes.service';

describe('ConsultarviajesService', () => {
  let service: ConsultarviajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarviajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
