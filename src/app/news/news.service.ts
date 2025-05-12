import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { INewsPage } from './articles-response.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(private http: HttpClient) { }

  getNewsBySearch(search: string): Observable<INewsPage> {
    let params = new HttpParams();
    params = params.append('q', search);
    return this.getNewsEndpointEverything(params);
  }

  getNewsEndpointEverything(params: HttpParams): Observable<INewsPage> {
    return this.http.get<INewsPage>(`${environment.url}/everything`, {
      params: params
    })
  }

  getTopHeadlinesByCountry(country: string = 'us') {
    let params = new HttpParams();
    params = params.append('country', country);
    return this.getNewsEndpointTopHeadlines(params);
  }

  getNewsEndpointTopHeadlines(params: HttpParams): Observable<INewsPage> {
    return this.http.get<INewsPage>(`${environment.url}/top-headlines`, {
      params: params
    })
  }
}

