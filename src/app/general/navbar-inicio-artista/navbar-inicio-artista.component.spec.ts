import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInicioArtistaComponent } from './navbar-inicio-artista.component';

describe('NavbarInicioArtistaComponent', () => {
  let component: NavbarInicioArtistaComponent;
  let fixture: ComponentFixture<NavbarInicioArtistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarInicioArtistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarInicioArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
