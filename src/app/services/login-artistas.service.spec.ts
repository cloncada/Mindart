import { TestBed } from '@angular/core/testing';

import { LoginArtistasService } from './login-artistas.service';

describe('LoginArtistasService', () => {
  let service: LoginArtistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginArtistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
