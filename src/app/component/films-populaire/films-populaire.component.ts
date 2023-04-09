import { Component } from '@angular/core';
import { MyApiServiceService } from '../../service/my-api-service.service';
import { Film } from 'src/app/models/Film';

@Component({
  selector: 'app-films-populaire',
  templateUrl: './films-populaire.component.html',
  styleUrls: ['./films-populaire.component.css']
})
export class FilmsPopulaireComponent {

  popularMovies!: Film[];

  constructor(private myApiServiceService: MyApiServiceService) { }
  ngOnInit() {
    this.myApiServiceService.getFilmsPopulaires().subscribe((data) => {
      this.popularMovies = data;
    });
  }
}
