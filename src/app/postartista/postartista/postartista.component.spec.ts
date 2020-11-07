import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostartistaComponent } from './postartista.component';

describe('PostartistaComponent', () => {
  let component: PostartistaComponent;
  let fixture: ComponentFixture<PostartistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostartistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostartistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
