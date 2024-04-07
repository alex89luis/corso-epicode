import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { iFilm } from './models/i-film';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  filmUrl = environment.moviePopoularUrl;
  filmArr:iFilm[] = []
  filmSub = new BehaviorSubject<iFilm[]>([])
  $film = this.filmSub.asObservable()
  constructor(private http:HttpClient)
   {
    this.getAll().subscribe(data => {
      this.filmSub.next(data)
      this.filmArr = data;
    })


   }





  getAll(){
    return this.http.get<iFilm[]>(this.filmUrl)
  }

}
