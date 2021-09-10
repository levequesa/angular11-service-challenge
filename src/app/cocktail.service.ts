import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './Cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private url_Json : string = "assets/cocktails.json";

  constructor(private http : HttpClient) { }

  getCocktails(): Observable<Cocktail[]>{
    return this.http.get<Cocktail[]>(this.url_Json);
  }
}
