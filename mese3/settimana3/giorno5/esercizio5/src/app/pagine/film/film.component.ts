import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { FilmService } from '../../film.service';
import { iFilm } from '../../models/i-film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrl: './film.component.scss'
})
export class FilmComponent {

  films:iFilm[] = [];
  constructor( private filmSvc:FilmService){}

  ngOnInit(){
    this.filmSvc.$film.subscribe(films => this.films = films)

  }


}
