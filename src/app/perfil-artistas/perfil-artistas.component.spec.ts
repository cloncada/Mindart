import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilArtistasComponent } from './perfil-artistas.component';


describe('PerfilArtistasComponent', () => {
  let component: PerfilArtistasComponent;
  let fixture: ComponentFixture<PerfilArtistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilArtistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
