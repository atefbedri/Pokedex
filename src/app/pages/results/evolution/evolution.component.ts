import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.scss']
})
export class EvolutionComponent implements OnInit {

  evolutionImages = [
    '/assets/images/Pokeball.png',
    '/assets/images/Pokeball.png',
    '/assets/images/Pokeball.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
