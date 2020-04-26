import { TestBed } from '@angular/core/testing';

import { HomeComponentsService } from './home-components.service';

describe('HomeComponentsService', () => {
  let service: HomeComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
