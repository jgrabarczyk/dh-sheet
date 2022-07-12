import { TestBed } from '@angular/core/testing';

import { AtributeListService } from './atribute-list.service';

describe('AtributeListService', () => {
  let service: AtributeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtributeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
