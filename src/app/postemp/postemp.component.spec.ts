import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostempComponent } from './postemp.component';

describe('PostempComponent', () => {
  let component: PostempComponent;
  let fixture: ComponentFixture<PostempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
