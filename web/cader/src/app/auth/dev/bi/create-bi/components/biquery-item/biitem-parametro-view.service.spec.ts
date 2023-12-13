import { TestBed } from '@angular/core/testing';

import { BIItemParametroViewService } from './biitem-parametro-view.service';

describe('BIItemParametroViewService', () => {
  let service: BIItemParametroViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BIItemParametroViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
