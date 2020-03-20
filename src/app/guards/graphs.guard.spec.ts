import { TestBed } from '@angular/core/testing';

import { GraphsGuard } from './graphs.guard';

describe('GraphsGuard', () => {
  let guard: GraphsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GraphsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
