import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.http.post(`${environment.apiUrl}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string) {
    return this.http.get(`${environment.apiUrl}/user/exists/${nomeUsuario}`);
  }
}
