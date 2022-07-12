import { TestBed } from '@angular/core/testing';

import { AttributesApiService } from './attributes-api.service';

describe('AttributesApiService', () => {
  let service: AttributesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttributesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
