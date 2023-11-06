import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokeService } from '../../service/poke.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput: string = "";
  @Output() emitPokemonDetails: EventEmitter<any> = new EventEmitter();

  constructor(private _router: Router, private _pokeService: PokeService) { }

  ngOnInit(): void {
  }

  /**
   * Method called to search by pakemon Name or Id
   */
  search() : void{
    if(this.searchInput){
      this._pokeService.searchPokemonByNameOrId(this.searchInput)
      .subscribe((response: any)=>{
        this.emitPokemonDetails.emit(response);
      },(error: HttpErrorResponse)=>{
        if(error.status >= 400)
        this._router.navigate(['not-found']);
      });
    }
  }

  /**
   * Generate a random id for pokemon
   */
  generateRandomNumber() {
    this.searchInput = (Math.floor(Math.random() * 898) + 1).toString();
    this.search()
  }

}
