import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardPedidosComponent } from './dash-board-pedidos.component';

describe('DashBoardPedidosComponent', () => {
  let component: DashBoardPedidosComponent;
  let fixture: ComponentFixture<DashBoardPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardPedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoardPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
