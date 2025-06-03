import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello-user',
  imports: [FormsModule],
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