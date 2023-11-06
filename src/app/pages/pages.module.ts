import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './results/stats/stats.component';
import { EvolutionComponent } from './results/evolution/evolution.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "",
    component: ResultsComponent
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
];


@NgModule({
  declarations: [SearchComponent, ResultsComponent, StatsComponent, EvolutionComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
