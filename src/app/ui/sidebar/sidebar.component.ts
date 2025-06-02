import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LanguageService } from '../../language/language.service';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Language } from '../../language/language.interface';


@Component({
  selector: 'app-sidebar',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  languageService = inject(LanguageService)
  selectedLanguage = new FormControl<Language>(this.languageService.currentLanguage, Validators.required);

  constructor() {
  }

  setLanguage() {
    if (this.selectedLanguage.valid) {
      this.languageService.currentLanguage = this.selectedLanguage.value!;
    }
  }
}
