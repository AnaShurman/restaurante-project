import { TestBed } from '@angular/core/testing';

import { ItensServiceService } from './itens-service.service';

describe('ItensServiceService', () => {
  let service: ItensServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItensServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
