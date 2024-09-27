import { TestBed } from '@angular/core/testing';

import { ImportLeadsService } from './import-leads.service';

describe('ImportLeadsService', () => {
  let service: ImportLeadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportLeadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
