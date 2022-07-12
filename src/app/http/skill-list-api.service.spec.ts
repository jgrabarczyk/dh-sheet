import { TestBed } from '@angular/core/testing';

import { SkillListApiService } from './skill-list-api.service';

describe('SkillListService', () => {
  let service: SkillListApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillListApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
