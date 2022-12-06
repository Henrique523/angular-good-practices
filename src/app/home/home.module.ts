import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import {MensagemModule} from "../componentes/mensagem/mensagem.module";


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MensagemModule,

    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
