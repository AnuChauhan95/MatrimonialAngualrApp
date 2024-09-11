import { TestBed } from '@angular/core/testing';

import { SubCasteServiceService } from './sub-caste-service.service';

describe('SubCasteServiceService', () => {
  let service: SubCasteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCasteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
