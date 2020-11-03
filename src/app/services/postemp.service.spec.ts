import { TestBed } from '@angular/core/testing';

import { PostempService } from './postemp.service';

describe('PostempService', () => {
  let service: PostempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
