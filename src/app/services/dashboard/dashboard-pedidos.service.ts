import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardPedidosService {

  constructor() { }

  public getOrders() {
    return [
          {
            "id": 1,
            "nome": "ByteBurger",
            "numeroMesa": 6,
            "bebidaInclusa": true,
            "bebida":"coca-cola",
            "comentario": "sem Cebola",
            "image": "../../assets/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg",
            "status":"Preparando"
          },
          {
            "id": 2,
            "nome": "Byte Fries Fusion",
            "numeroMesa": 7,
            "bebidaInclusa": true,
            "comentario": "com Bacon",
            "bebida":"sem bebida",
            "image": "../../assets/matthew-reyes-5I5aqYJrdso-unsplash.jpg",
            "status":"Aguardando"
          },
          {
            "id": 3,
            "nome": "Byte Fries Fusion",
            "numeroMesa": 7,
            "bebidaInclusa": true,
            "comentario": "com Bacon",
            "bebida":"sem bebida",
            "image": "../../assets/matthew-reyes-5I5aqYJrdso-unsplash.jpg",
            "status":"Pronto"
          }
    ]
  }
  getProductsMini() {
    return Promise.resolve(this.getOrders().slice(0, 5));
}
}
