import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokeService } from '../../service/poke.service';

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
      });
    }
  }

}
