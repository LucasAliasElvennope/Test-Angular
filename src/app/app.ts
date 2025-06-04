import { Component } from '@angular/core';
import { MajusculePipe } from './majuscule-pipe';
import { SharedModule } from './shared/shared-module';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [SharedModule]
})
export class App {}
