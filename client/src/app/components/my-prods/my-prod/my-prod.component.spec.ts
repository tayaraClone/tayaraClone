import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProdComponent } from './my-prod.component';

describe('MyProdComponent', () => {
  let component: MyProdComponent;
  let fixture: ComponentFixture<MyProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
