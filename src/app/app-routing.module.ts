import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FilmsDetailsComponent } from './component/films-details/films-details.component';
import { FilmsPopulaireComponent } from './component/films-populaire/films-populaire.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'filmDetails', component: FilmsDetailsComponent},
{path: 'filmPopulaire', component: FilmsPopulaireComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
