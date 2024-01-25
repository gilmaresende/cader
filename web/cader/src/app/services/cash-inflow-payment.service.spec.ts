import { TestBed } from '@angular/core/testing';

import { CashInflowPaymentService } from './cash-inflow-payment.service';

describe('CashInflowPaymentService', () => {
  let service: CashInflowPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashInflowPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
