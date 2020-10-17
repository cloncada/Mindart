import { TestBed } from '@angular/core/testing';

import { UploapServicesService } from './uploap-services.service';

describe('UploapServicesService', () => {
  let service: UploapServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploapServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
