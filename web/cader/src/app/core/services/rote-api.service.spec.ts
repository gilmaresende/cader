import { TestBed } from '@angular/core/testing';

import { RoteApiService } from './rote-api.service';

describe('RoteApiService', () => {
  let service: RoteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
