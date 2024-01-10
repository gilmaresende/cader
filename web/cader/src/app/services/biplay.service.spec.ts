import { TestBed } from '@angular/core/testing';

import { BIPlayService } from './biplay.service';

describe('BIPlayService', () => {
  let service: BIPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BIPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
