import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './header/header.component';
import { HelloUser } from './hello-user/hello-user';
import { DateCompo } from './date-compo/date-compo';
import { Formulaire } from './formulaire/formulaire';

@NgModule({
  declarations: [],           // ✅ Vide
  imports: [
    CommonModule,
    Header,                   // ✅ Tes composants standalone ici
    HelloUser,
    DateCompo,
    Formulaire
  ],
  exports: [
    Header,                   // ✅ Tu les exportes pour les autres modules
    HelloUser,
    DateCompo,
    Formulaire
  ]
})
export class SharedModule { }