import { Component, inject } from '@angular/core';
import { NewsService } from '../news.service';
import { Observable } from 'rxjs';
import { INewsPage } from '../articles-response.interface';
import { AsyncPipe } from '@angular/common';
import { ArticleCardComponent } from "../article-card/article-card.component";

@Component({
  selector: 'app-news',
  imports: [
    AsyncPipe,
    ArticleCardComponent
],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  newsService = inject(NewsService);
  constructor() {}

  news$: Observable<INewsPage> = this.newsService.getTopHeadlinesByCountry();

}
