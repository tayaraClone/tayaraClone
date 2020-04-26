import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProdsComponent } from './all-prods.component';

describe('AllProdsComponent', () => {
  let component: AllProdsComponent;
  let fixture: ComponentFixture<AllProdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
