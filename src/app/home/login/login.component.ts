import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  usuario = '';
  senha = '';

  login() {
    console.log(this.usuario);
    console.log(this.senha);
  }
}
