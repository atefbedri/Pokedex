import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  abilities = [
    { name: 'HP', percent: 80 },
    { name: 'ATK', percent: 70 },
    { name: 'DEF', percent: 60 },
    { name: 'SATK', percent: 90 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
