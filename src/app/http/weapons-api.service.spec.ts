/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeaponsApiService } from './weapons-api.service';

describe('Service: WeaponsApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeaponsApiService]
    });
  });

  it('should ...', inject([WeaponsApiService], (service: WeaponsApiService) => {
    expect(service).toBeTruthy();
  }));
});
