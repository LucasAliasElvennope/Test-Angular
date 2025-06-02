// src/app/logging.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() {
    console.log('LoggingService est instancié !');
  }

  warn(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    console.warn(`[${timestamp}] AVERTISSEMENT: ${message}`);
  }

  error(message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    console.error(`[${timestamp}] ERREUR: ${message}`);
  }
}