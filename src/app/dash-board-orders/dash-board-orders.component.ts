import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DashboardPedidosService } from '../services/dashboard/dashboard-pedidos.service'
import { Product } from '../services/product'
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
  aguardando: any;
  preparando: any;
  pronto: any;
  constructor(private DashboardPedidosService: DashboardPedidosService, private cdr: ChangeDetectorRef
  ) { }

  async data(){
    this.sourceProducts = await this.DashboardPedidosService.getProductsMini();
    console.log(this.sourceProducts)
    this.aguardando = this.sourceProducts.filter(item => item.status === 'Aguardando');
    this.preparando = this.sourceProducts.filter(item => item.status === 'Preparando');
    this.pronto = this.sourceProducts.filter(item => item.status === 'Pronto');
  }
  async ngOnInit() {
this.data()
    console.log(this.aguardando);
    this.cdr.markForCheck();
    this.targetProducts = [];
  }

  onItemMove(event: any) {
    // Lógica para atualizar os outros p-pickList com base no evento
    // Exemplo: você pode mover os itens entre as listas ou realizar outras ações necessárias.
    console.log('Item movido:', event);
  }

  moveItem(item: string, targetColumn: string) {
    if (targetColumn === 'col1') {
      this.col1Items.push(item);
    } else if (targetColumn === 'col2') {
      this.col2Items.push(item);
    } else if (targetColumn === 'col3') {
      this.col3Items.push(item);
    }

    // Remove o item da coluna de origem
    this.col1Items = this.col1Items.filter(i => i !== item);
    this.col2Items = this.col2Items.filter(i => i !== item);
    this.col3Items = this.col3Items.filter(i => i !== item);
  }

  preparar(aguardando: any){
    aguardando.status = "Preparando"
    this.preparando.push(this.aguardando[0])
    this.aguardando = this.sourceProducts.filter(item => item.status === 'Aguardando');
    console.log(this.preparando)


  }
}

