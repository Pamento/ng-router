import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {

  private baseUrl: string = "https://api.themoviedb.org/3"
  private searchUri: string = "/search/movie"
  private apiKey: string = "b875d98d6eb8188277dedea4f187fe79"
  
  constructor( private http: HttpClient ) { }

  searchMovie(query: string){
    return this.http.get(`${this.baseUrl}${this.searchUri}`, { 
      params: new HttpParams()
      .set("api_key", this.apiKey)
      .set("query", query)
    })
  }
}
