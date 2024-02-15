import { TestBed } from '@angular/core/testing';

import { LotOfExpensesService } from './lot-of-expenses.service';

describe('LotOfExpensesService', () => {
  let service: LotOfExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotOfExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
