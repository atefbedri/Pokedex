import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
  styleUrls: ['./evolution.component.scss']
})
export class EvolutionComponent implements OnInit {

  @Input() evolutions: any = null;
  @Input() background: string = "#A8A87B";


  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Convert first char to upper case
   * @param text
   * @returns text
   */
  capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }
}
