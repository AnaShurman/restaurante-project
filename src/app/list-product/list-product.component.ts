import { Component, OnInit } from '@angular/core';
import { ItensServiceService } from '../services/itens-service.service'
import {Product} from "../services/product"
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})


export class ListProductComponent implements OnInit {
  layout: any = 'grid';
  items: any[] | undefined;
  product: Product[] = [];
  sortField: string = 'lanches';
  visible: boolean = false;
  description: any;
  carrinho: Product[] = [];
  quantidade: number = 0;
  finalizar: boolean= false;
  todosOsItens: Product[] = [];


  constructor(private ItensServiceService: ItensServiceService) { }

  ngOnInit() {
    this.items = [
      { label: 'Entradas' },
      { label: 'Lanches' },
      { label: 'Bebidas' },
      { label: 'Sobremesas' }
    ];
    this.ItensServiceService.getLanches().subscribe(value => {
      this.product = value.content;
      this.todosOsItens = value.content;
    });
  }

  showDialog(product: any) {
    console.log(product)
    this.description = product
    this.visible = true;
  }
  teste(itens: any) {
    if (itens.target.innerText === 'Entradas') {
      this.product = this.todosOsItens.filter(item => item.category === 'Entradas')
    }
    if (itens.target.innerText === 'Lanches') {
      this.product = this.todosOsItens.filter(item => item.category === 'Lanches')
    }

    if (itens.target.innerText === 'Bebidas') {
      this.product = this.todosOsItens.filter(item => item.category === 'Bebidas')
    }
    if (itens.target.innerText === 'Sobremesas') {
      this.product = this.todosOsItens.filter(item => item.category === 'Sobremesas')
    }

  }

  addItem(description: any){
    this.carrinho.push(description)
    this.quantidade = this.carrinho.length
  }

  finalizarCompra(){
    console.log(this.carrinho)
    this.finalizar = true;
  }

  RemoverProduto(carrinho: any){
    console.log(carrinho)
    this.carrinho = this.carrinho.filter(item => item !== carrinho);

  }

  enviarPedido(produtos: Product[]) {
    this.ItensServiceService.pedido(produtos);
  }
}
