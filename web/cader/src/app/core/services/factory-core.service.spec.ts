import { TestBed } from '@angular/core/testing';

import { FactoryCoreService } from './factory-core.service';

describe('FactoryCoreService', () => {
  let service: FactoryCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactoryCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
