import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-date-compo',
  imports: [CommonModule],
  templateUrl: './date-compo.html',
  styleUrl: './date-compo.scss'
})
export class DateCompo {
  currentDate: Date = new Date();
  specificDate: Date = new Date(2023, 10, 15, 14, 30, 0);
}