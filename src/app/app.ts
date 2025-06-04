import { Component } from '@angular/core';
import { Header } from './header/header.component';
import { HelloUser } from './hello-user/hello-user';
import { MajusculePipe } from './majuscule-pipe';
import { DateCompo } from './date-compo/date-compo';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, HelloUser, DateCompo]
})
export class App {}
