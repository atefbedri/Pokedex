import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.scss']
})
export class EvolutionComponent implements OnInit {

  @Input() evolutions: any = null;


  constructor() { }

  ngOnInit(): void {
  }

}
