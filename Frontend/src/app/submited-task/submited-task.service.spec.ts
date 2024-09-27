import { TestBed } from '@angular/core/testing';

import { SubmitedTaskService } from './submited-task.service';

describe('SubmitedTaskService', () => {
  let service: SubmitedTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitedTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
