import { TestBed, inject } from '@angular/core/testing';

import { EntreeService } from './entree.service';

describe('EntreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntreeService]
    });
  });

  it('should be created', inject([EntreeService], (service: EntreeService) => {
    expect(service).toBeTruthy();
  }));
});
