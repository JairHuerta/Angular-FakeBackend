import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(parameters: any): Observable<any>{

    
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parameters.country + '&category=' + parameters.category + '&apiKey=ecd57a25d28943a2abede1f0bee1a866';
    
    return this.http.get(URL);
  }

}
