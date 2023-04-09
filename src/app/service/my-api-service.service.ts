import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Film } from '../models/Film';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyApiServiceService {
  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des films populaires à partir de l'API TMDb
  getFilmsPopulaires(): Observable<Film[]> {
    return this.http.get(environment.apiBaseUrl + 'movie/popular?api_key=' + environment.keyAPI).pipe(map((resultat: any) => resultat.results));
  }

  // Méthode pour récupérer les détails d'un film à partir de l'API TMDb
  getDetailsFilm(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `movie/${id}?api_key=` + environment.keyAPI);
  }

  getDetailsActeur(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `person/${id}?api_key=` + environment.keyAPI);
  }

  getDetailsImage(id: number): Observable<any> {
    return this.http.get(environment.apiBaseUrl + `image/${id}?api_key=` + environment.keyAPI);
  }
}
