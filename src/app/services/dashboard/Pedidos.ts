import {Item} from "./Item";

export interface Pedidos {
  id: any;
  tableNumber: number;
  total: number;
  itemResponseList: Item[];
  status: string;
  createdAt: string;
  updatedAt: string;
}
