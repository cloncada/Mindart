import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioArtistasComponent } from './inicio-artistas.component';

describe('InicioArtistasComponent', () => {
  let component: InicioArtistasComponent;
  let fixture: ComponentFixture<InicioArtistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioArtistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioArtistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
