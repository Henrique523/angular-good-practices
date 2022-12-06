import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import("./home/home.module")
      .then((module) => module.HomeModule),
  },
  {
    path: 'animais',
    loadChildren: () => import("./animais/animais.module")
      .then((module) => module.AnimaisModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
