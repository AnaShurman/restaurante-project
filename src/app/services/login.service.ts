import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Token} from "./Token";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly http: HttpClient) { }

  login(username: string, senha: string) {
    return this.http.post<Token>(`${environment.url}/v1/user/login`, {
      username: username,
      password: senha
    });
  }
}
