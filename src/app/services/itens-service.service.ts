import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {ProductContent} from "./ProductContent";
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ItensServiceService {

  constructor(private http: HttpClient) {
  }

  public getLanches() {
    return this.http.get<ProductContent>(`${environment.url}/v1/product`)
  }

  public pedido(produto: Product[]) {
    this.http.post<void>(`${environment.url}/v1/order`, {
      items: produto.map(value => {
        return {
          quantity: 1,
          productId: Number(value.id)
        }
      })
    }).subscribe();
  }
}
