import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header {
  
  Image : string ="src/assets/gg.png";

  afficherAlerte() {
    alert('Salut');
  }
}
