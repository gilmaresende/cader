import { TestBed } from '@angular/core/testing';
import { BaseHttpService } from './base-http.service';
import { SEntidade } from '../model/sentidade';

describe('BasehttpService', () => {
  let service: BaseHttpService<SEntidade>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
