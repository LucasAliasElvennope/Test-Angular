import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MajusculePipe } from '../../majuscule-pipe';

@Component({
  selector: 'app-hello-user',
  imports: [FormsModule, MajusculePipe],
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