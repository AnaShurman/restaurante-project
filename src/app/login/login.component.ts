import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor(private readonly service: LoginService) {
  }

  login() {
    this.service.login(this.usuario, this.senha).subscribe(value => localStorage.setItem("token", value.token))
  }
}
