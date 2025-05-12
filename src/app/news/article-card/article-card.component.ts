import { Component, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { MatCardModule } from '@angular/material/card'
import { IArticle } from '../article.interface';

@Component({
  selector: 'app-article-card',
  imports: [
    MatCardModule
  ],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.scss'
})
export class ArticleCardComponent {
  constructor(
    private newsService: NewsService
  )
  { }

  @Input() article!: IArticle;
}
