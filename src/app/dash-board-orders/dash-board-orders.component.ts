import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DashboardPedidosService } from '../services/dashboard/dashboard-pedidos.service'
import { Product } from '../services/product'
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-dash-board-orders',
  templateUrl: './dash-board-orders.component.html',
  styleUrls: ['./dash-board-orders.component.scss']
})

export class DashBoardOrdersComponent implements OnInit {
  sourceProducts!: Product[];
  products: any
  targetProducts!: Product[];
  fineshed!: Product[];
  col1Items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  col2Items: string[] = [];
  col3Items: string[] = [];
  aguardando: any[] = []; teste: any;
  preparando: any[] = [];
  pronto: any[] = [];
  
  constructor(private DashboardPedidosService: DashboardPedidosService, private cdr: ChangeDetectorRef, private zone: NgZone,
  ) { }

  async data() {
    this.sourceProducts = await this.DashboardPedidosService.getProductsMini();
    this.aguardando = this.sourceProducts.filter(item => item.status === 'Aguardando');
    this.preparando = this.sourceProducts.filter(item => item.status === 'Preparando');
    this.pronto = this.sourceProducts.filter(item => item.status === 'Pronto');
  }
  async ngOnInit() {
    this.data()
    this.cdr.markForCheck();
    this.targetProducts = [];
  }

  moveItem(item: string, targetColumn: string) {
    if (targetColumn === 'col1') {
      console.log(this.col1Items)
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

}