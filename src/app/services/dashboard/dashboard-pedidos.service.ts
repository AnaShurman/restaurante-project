import { Injectable } from '@angular/core';
import * as SockJS from "sockjs-client";
import * as Stomp from "stompjs";
import {environment} from "../../../environments/environment.development";
import {Observable} from "rxjs";
import {Pedidos} from "./Pedidos";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardPedidosService {

  constructor(private readonly http: HttpClient) { }

  socket = new SockJS("http://localhost:8080/ws");
  stompClient = Stomp.over(this.socket);

  subscribe(topic: string, callback: any): void {
    const connect: boolean = this.stompClient.connected;
    if (connect) {
      this.subscribeToTopic(topic, callback);
      return;
    }

    this.stompClient.connect({}, () => {
      this.subscribeToTopic(topic, callback);
    })
  }

  private subscribeToTopic(topic: string, callback: any): void {
    this.stompClient.subscribe(topic, (message): any => {
      callback(message.body)
    })
  }

  public listOrder(): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>(`${environment.url}/v1/order`);
  }

  updateStatus(id: number) {
    this.http.get(`${environment.url}/v1/order/${Number(id)}/status`).subscribe();
  }
}
