import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  currentTab: string = 'STATS';

  constructor() { }

  ngOnInit(): void {
  }

}
