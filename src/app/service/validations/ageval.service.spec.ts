import { TestBed } from '@angular/core/testing';

import { AgevalService } from './ageval.service';

describe('AgevalService', () => {
  let service: AgevalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgevalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
