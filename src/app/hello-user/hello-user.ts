import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-user',
  imports: [],
  templateUrl: './hello-user.html',
  styleUrl: './hello-user.scss'
})
export class HelloUser {
 username: string = '';
 clickcount: number = 0;

 incrementClickCount(): void {
  this.clickcount++;
}
}