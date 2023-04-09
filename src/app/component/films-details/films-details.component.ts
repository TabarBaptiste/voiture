import { Component } from '@angular/core';
import { MyApiServiceService } from '../../service/my-api-service.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent {

  movie: any;
  movieIndex: number = 0;
  popularMovies!: any[];

  constructor(private myApiServiceService: MyApiServiceService) { }

  ngOnInit() {
    this.myApiServiceService.getFilmsPopulaires().subscribe((data) => {
      this.popularMovies = data;

      this.myApiServiceService.getDetailsFilm(this.popularMovies[this.movieIndex].id).subscribe((movieData) => {
        this.movie = movieData;
      });
    });
  }

  precedent() {
    this.movieIndex--;
    if (this.movieIndex < 0) {
      this.movieIndex = this.popularMovies.length - 1;
    }
    this.myApiServiceService.getDetailsFilm(this.popularMovies[this.movieIndex].id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  suivant() {
    this.movieIndex++;
    if (this.movieIndex > this.popularMovies.length - 1) {
      this.movieIndex = 0;
    }
    this.myApiServiceService.getDetailsFilm(this.popularMovies[this.movieIndex].id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
}