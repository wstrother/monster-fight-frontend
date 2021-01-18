import { TestBed } from '@angular/core/testing';

import { CharCreatorService } from './char-creator.service';

describe('CharCreatorService', () => {
  let service: CharCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
