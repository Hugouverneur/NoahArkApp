import { TestBed } from '@angular/core/testing';

import { PhylumsService } from './phylums.service';

describe('PhylumsService', () => {
  let service: PhylumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhylumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
