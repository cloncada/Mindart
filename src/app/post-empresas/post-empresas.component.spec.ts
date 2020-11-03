import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEmpresasComponent } from './post-empresas.component';

describe('PostEmpresasComponent', () => {
  let component: PostEmpresasComponent;
  let fixture: ComponentFixture<PostEmpresasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEmpresasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
