import { TestBed } from '@angular/core/testing';

import { GenusService } from './genus.service';

describe('GenusService', () => {
  let service: GenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
