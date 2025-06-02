import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { NewsService } from '../news.service';
import { debounceTime, finalize, Observable, Subject, takeUntil, tap } from 'rxjs';
import { INewsPage } from '../articles-response.interface';
import { AsyncPipe } from '@angular/common';
import { ArticleCardComponent } from "../article-card/article-card.component";
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBar } from '@angular/material/progress-bar'
import { Event } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [
    ArticleCardComponent,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressBar
],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent implements OnInit, OnDestroy{
  fb = inject(FormBuilder);
  newsService = inject(NewsService);
  
  search = this.fb.control('', Validators.required);
  newsLoaded = signal(false);
  news: INewsPage | null = null;
  destroy$ = new Subject<void>();

  ngOnInit(): void {  
    this.newsService.getTopHeadlinesByCountry().pipe(
      takeUntil(this.destroy$),
      finalize(() => this.newsLoaded.set(true))
    ).subscribe({
      next: (news) => {
        this.news = news;
      }
    })
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  timeout() {
    
  }

  searchNews() {
    if(this.search.valid) {
      
    }
  }
}
