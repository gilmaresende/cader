import { TestBed } from '@angular/core/testing';

import { ExpensePaymentService } from './expense-payment.service';

describe('ExpensePaymentService', () => {
  let service: ExpensePaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensePaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
