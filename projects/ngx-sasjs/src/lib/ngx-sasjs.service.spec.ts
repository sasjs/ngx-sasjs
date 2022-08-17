import { TestBed } from '@angular/core/testing';

import { NgxSasjsService } from './ngx-sasjs.service';

describe('NgxSasjsService', () => {
  let service: NgxSasjsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSasjsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
