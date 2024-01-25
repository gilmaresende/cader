import { TestBed } from '@angular/core/testing';

import { ModalImplService } from './modal-impl.service';

describe('ModalImplService', () => {
  let service: ModalImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
