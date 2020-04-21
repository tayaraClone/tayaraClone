import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllCsComponent } from './display-all-cs.component';

describe('DisplayAllCsComponent', () => {
  let component: DisplayAllCsComponent;
  let fixture: ComponentFixture<DisplayAllCsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllCsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllCsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
