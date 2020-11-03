import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEmpresasComponent } from './navbar-empresas.component';

describe('NavbarEmpresasComponent', () => {
  let component: NavbarEmpresasComponent;
  let fixture: ComponentFixture<NavbarEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
