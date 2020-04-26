import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedAccNavComponent } from './opened-acc-nav.component';

describe('OpenedAccNavComponent', () => {
  let component: OpenedAccNavComponent;
  let fixture: ComponentFixture<OpenedAccNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenedAccNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenedAccNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
