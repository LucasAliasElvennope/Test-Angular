import { Component } from '@angular/core';
import{CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class Header {
  
  image : string = "assets/gg.png";

  afficherAlerte() {
    alert('Salut');
  }
}
