import { Injectable } from '@angular/core';
import language from '../assets/language.json'
import { Language } from './language.interface';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  get languages(): Language[] {
    return language;
  }

  get defaultLanguage() {
    return language[0];
  }

  get currentLanguage() {
    try {
      const lang = window.localStorage.getItem('lang');
      if (lang) {
        return JSON.parse(lang) as Language;
      }
      return this.defaultLanguage;
    } catch (e) {
      return this.defaultLanguage;
    }
  }

  set currentLanguage(lang: Language) {
    window.localStorage.setItem('lang', JSON.stringify(lang));
  }
}
