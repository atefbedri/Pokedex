import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results/results.component';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './results/stats/stats.component';
import { EvolutionComponent } from './results/evolution/evolution.component';

const routes: Routes = [
  {
    path: "",
    component: ResultsComponent
  },
];


@NgModule({
  declarations: [ResultsComponent, StatsComponent, EvolutionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
