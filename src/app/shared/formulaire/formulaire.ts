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
  message = '';
  formulaireEnvoye = false;

  envoyerFormulaire() {
    this.formulaireEnvoye = true;
    console.log('✅ Formulaire envoyé !');
    console.log('Nom :', this.nom);
    console.log('Email :', this.email);
    console.log('Message :', this.message);
  }
}
