import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {AutenticacaoService} from "../../autenticacao/autenticacao.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  login() {
    this.authService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        console.log('Autenticado com sucesso!');
        this.router.navigate(['animais']);
      },
      (error) => {
        alert("Usuário ou senha inválido");
        console.log(error);
      }
    );
  }
}
