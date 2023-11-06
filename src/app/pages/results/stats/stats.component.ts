import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  @Input() stats: any = null;
  @Input() background: string = "#A8A87B";
  constructor() { }

  ngOnInit(): void {
  }

}
