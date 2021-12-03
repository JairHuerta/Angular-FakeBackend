import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarnewsComponent } from './navbarnews.component';

describe('NavbarnewsComponent', () => {
  let component: NavbarnewsComponent;
  let fixture: ComponentFixture<NavbarnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
