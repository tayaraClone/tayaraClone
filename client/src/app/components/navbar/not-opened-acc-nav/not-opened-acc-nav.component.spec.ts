import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotOpenedAccNavComponent } from './not-opened-acc-nav.component';

describe('NotOpenedAccNavComponent', () => {
  let component: NotOpenedAccNavComponent;
  let fixture: ComponentFixture<NotOpenedAccNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotOpenedAccNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotOpenedAccNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
