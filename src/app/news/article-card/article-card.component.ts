import { Component, input, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'
import { IArticle } from '../article.interface';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-article-card',
  imports: [
    MatCardModule, MatChipsModule, MatIconModule, DatePipe
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  article = input.required<IArticle>();

  constructor(
    private newsService: NewsService
  )
  { }
}
