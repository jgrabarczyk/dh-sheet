/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeaponListService } from './weapon-list.service';

describe('Service: WeaponList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeaponListService]
    });
  });

  it('should ...', inject([WeaponListService], (service: WeaponListService) => {
    expect(service).toBeTruthy();
  }));
});
