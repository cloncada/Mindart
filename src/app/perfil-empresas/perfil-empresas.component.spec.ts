import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEmpresasComponent } from './perfil-empresas.component';

describe('PerfilEmpresasComponent', () => {
  let component: PerfilEmpresasComponent;
  let fixture: ComponentFixture<PerfilEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
