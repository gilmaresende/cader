import { TestBed } from '@angular/core/testing';

import { CardInvoiceService } from './card-invoice.service';

describe('CardInvoiceService', () => {
  let service: CardInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
