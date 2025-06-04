import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-formulaire',
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.scss'
})
export class Formulaire {
  nom = '';
  email = '';

  envoyerFormulaire() {
    console.log('✅ Formulaire envoyé !');
    console.log('Nom :', this.nom);
    console.log('Email :', this.email);
  }
}
