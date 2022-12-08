import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {NovoUsuario} from "./novo-usuario";
import {minusculoValidator} from "./minusculo.validator";
import {UsuarioExisteService} from "./usuario-existe.service";
import {usuarioSenhaIguaisValidator} from "./usuario-senha-iguais.validator";
import {NovoUsuarioService} from "./novo-usuario.service";

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.novoUsuarioForm = this.formBuilder.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      userName: ['', [
          Validators.required,
          minusculoValidator
        ],
        this.usuarioExistenteService.usuarioJaExiste()
      ],
      password: ['', [
        Validators.required
      ]],
    }, {
      validators: [usuarioSenhaIguaisValidator]
    });
  }

  cadastrar() {
    if (!this.novoUsuarioForm.valid) {
      return;
    }

    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    this.novoUsuarioService.cadastrarNovoUsuario(novoUsuario).subscribe(
      () => this.router.navigate(['']),
      (error) => console.log(error)
    );

  }
}
