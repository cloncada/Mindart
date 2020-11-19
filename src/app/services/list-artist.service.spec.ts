import { TestBed } from '@angular/core/testing';

import { ListArtistService } from './list-artist.service';

describe('ListArtistService', () => {
  let service: ListArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
