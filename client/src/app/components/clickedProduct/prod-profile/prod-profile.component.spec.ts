import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdProfileComponent } from './prod-profile.component';

describe('ProdProfileComponent', () => {
  let component: ProdProfileComponent;
  let fixture: ComponentFixture<ProdProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
