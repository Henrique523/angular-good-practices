import {FormGroup} from "@angular/forms";

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const userName = formGroup.get('userName')?.value;
  const password = formGroup.get('password')?.value;

  return userName.trim() == password.trim()
    ? { usuarioSenhaIguais: true }
    : null;
}
