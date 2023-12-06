import { TestBed } from '@angular/core/testing';

import { DashboardPedidosService } from './dashboard-pedidos.service';

describe('DashboardPedidosService', () => {
  let service: DashboardPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
