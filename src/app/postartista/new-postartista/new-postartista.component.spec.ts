import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostartistaComponent } from './new-postartista.component';

describe('NewPostartistaComponent', () => {
  let component: NewPostartistaComponent;
  let fixture: ComponentFixture<NewPostartistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostartistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostartistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
