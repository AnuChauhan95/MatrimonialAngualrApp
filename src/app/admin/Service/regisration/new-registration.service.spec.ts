import { TestBed } from '@angular/core/testing';

import { NewRegistrationService } from './new-registration.service';

describe('NewRegistrationService', () => {
  let service: NewRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
