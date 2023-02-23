import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {Animais} from "./animais";
import {TokenService} from "../autenticacao/token.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {
  constructor(private httpClient: HttpClient, private tokenService: TokenService) {}

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais> {
    const token = this.tokenService.retornaToken();

    const headers = new HttpHeaders();
    headers.append("x-access-token", token);

    return this.httpClient.get<Animais>(`${environment.apiUrl}/${nomeDoUsuario}/photos`, { headers });
  }
}
