import { TestBed } from '@angular/core/testing';

import { FormParameterBIViewService } from './form-parameter-biview.service';

describe('FormParameterBIViewService', () => {
  let service: FormParameterBIViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormParameterBIViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
