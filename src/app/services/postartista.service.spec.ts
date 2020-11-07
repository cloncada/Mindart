import { TestBed } from '@angular/core/testing';

import { PostartistaService } from './postartista.service';

describe('PostartistaService', () => {
  let service: PostartistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostartistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
