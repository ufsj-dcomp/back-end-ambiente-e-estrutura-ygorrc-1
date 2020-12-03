import { TestBed } from '@angular/core/testing';

import { PatineteService } from './patinete.service';

describe('PatineteService', () => {
  let service: PatineteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatineteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
