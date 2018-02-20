import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { newsdata } from './news';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private httpClient:HttpClient) {}
  news:string[] =[];

  private _url: string = "https://newsapi.org/v2/everything?sources=bbc-news&apiKey=26a4d7f5b96649e5a829f7ead515ab0e";

  getNewsData(): Observable<newsdata[]> {
  	return this.httpClient.get(this._url);
  	
  	//return this.news[0];
  }




}