import { Component } from '@angular/core';
import { Header } from './header/header.component';
import { HelloUser } from './hello-user/hello-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, HelloUser]
})
export class App {}
