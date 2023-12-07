import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import {ProductContent} from "./ProductContent";

@Injectable({
  providedIn: 'root'
})
export class ItensServiceService {

  constructor(private http: HttpClient) { }

  public getLanches() {
    return this.http.get<ProductContent>(`${environment.url}/v1/product`)
  }
}
