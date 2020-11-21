import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeditCompanyComponent } from './fedit-company.component';

describe('FeditCompanyComponent', () => {
  let component: FeditCompanyComponent;
  let fixture: ComponentFixture<FeditCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeditCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeditCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
