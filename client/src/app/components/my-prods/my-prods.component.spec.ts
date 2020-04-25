import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProdsComponent } from './my-prods.component';

describe('MyProdsComponent', () => {
  let component: MyProdsComponent;
  let fixture: ComponentFixture<MyProdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
