import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeNewProdComponent } from './make-new-prod.component';

describe('MakeNewProdComponent', () => {
  let component: MakeNewProdComponent;
  let fixture: ComponentFixture<MakeNewProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeNewProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeNewProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
