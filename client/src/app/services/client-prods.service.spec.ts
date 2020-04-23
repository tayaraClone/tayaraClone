import { TestBed } from '@angular/core/testing';

import { ClientProdsService } from './client-prods.service';

describe('ClientProdsService', () => {
  let service: ClientProdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientProdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
