import {Product} from "../product";

export interface Item {
  id: any;
  quantity: number;
  subTotal: number;
  productResponse: Product;
}
