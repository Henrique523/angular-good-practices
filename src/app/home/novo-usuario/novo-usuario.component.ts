import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NovoUsuario} from "./novo-usuario";
import {minusculoValidator} from "./minusculo.validator";

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.scss']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
      ]],
      password: ['', [
        Validators.required
      ]],
    });
  }

  cadastrar() {
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
