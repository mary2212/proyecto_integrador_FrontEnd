import { TestBed } from '@angular/core/testing';

import { OcupantesService } from './ocupantes.service';

describe('OcupantesService', () => {
  let service: OcupantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OcupantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
