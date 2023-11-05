import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput: string = "";

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Method called to search by pakemon Name or Id
   */
  search() : void{
    //TODO service search implementation
    this._router.navigate(['results']);
  }

}
