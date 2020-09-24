import { TestBed } from '@angular/core/testing';

import { CompaniesServicesService } from './companies-services.service';

describe('CompaniesServicesService', () => {
  let service: CompaniesServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompaniesServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
