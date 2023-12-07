import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DashboardPedidosService } from '../services/dashboard/dashboard-pedidos.service'
import { Product } from '../services/product'
import {Pedidos} from "../services/dashboard/Pedidos";
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-dash-board-orders',
  templateUrl: './dash-board-orders.component.html',
  styleUrls: ['./dash-board-orders.component.scss']
})

export class DashBoardOrdersComponent implements OnInit {
  sourceProducts!: Pedidos[];
  targetProducts!: Product[];
  col1Items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  col2Items: string[] = [];
  aguardando: Pedidos[] = [];
  preparando: Pedidos[] = [];
  pronto: Pedidos[] = [];
  constructor(private DashboardPedidosService: DashboardPedidosService, private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.cdr.markForCheck();
    this.targetProducts = [];
    this.DashboardPedidosService.listOrder().subscribe(value => {
      this.sourceProducts = value;
      this.aguardando = value.filter(item => item.status === 'REQUESTED');
      this.preparando = value.filter(item => item.status === 'PREPARING');
      this.pronto = value.filter(item => item.status === 'FINISHED');

    });
    // @ts-ignore
    this.DashboardPedidosService.subscribe("/topic/order", (item) => {
      this.sourceProducts = JSON.parse(item);
      this.aguardando = this.sourceProducts.filter(item => item.status === 'REQUESTED');
      this.preparando = this.sourceProducts.filter(item => item.status === 'PREPARING');
      this.pronto = this.sourceProducts.filter(item => item.status === 'FINISHED');
    })
  }

  moveItem(item: string, targetColumn: string) {
    if (targetColumn === 'col1') {
      this.col1Items.push(item);
    } else if (targetColumn === 'col2') {
      this.col2Items.push(item);
    }

    // Remove o item da coluna de origem
    this.col1Items = this.col1Items.filter(i => i !== item);
    this.col2Items = this.col2Items.filter(i => i !== item);
  }

  async preparar(aguardando: any) {
      aguardando.status = "Preparando";
      this.preparando.push(aguardando)
      this.aguardando = this.sourceProducts.filter(item => item.status === 'Aguardando');
  }

  updateStatus(id: number) {
    this.DashboardPedidosService.updateStatus(id);
    this.aguardando = this.sourceProducts.filter(item => item.status === 'REQUESTED');
    this.preparando = this.sourceProducts.filter(item => item.status === 'PREPARING');
    this.pronto = this.sourceProducts.filter(item => item.status === 'FINISHED');
  }

  updateAllStatus(pronto: Pedidos[]) {
    pronto.filter(value => value.status !== "FINISHED").map(value => this.updateStatus(value.id))
  }
}

