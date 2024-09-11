import { TestBed } from '@angular/core/testing';

import { GotraServiceService } from './gotra-service.service';

describe('GotraServiceService', () => {
  let service: GotraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
