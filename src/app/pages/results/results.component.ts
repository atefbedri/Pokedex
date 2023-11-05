import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  currentTab: string = 'STATS';
  pokemonDetails: any = null
  pokemonData: any = {};
  evolutionImageUrl: string ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  /**
   * Get pokemon details from search component
   * @param details
   */
  getPokemonDetails(details: any): void{
    this.pokemonDetails = details;
    this.fetchPokemonDetails();
  }

  /**
   * Create new object pokemon details
   */
  fetchPokemonDetails() {
      this.pokemonData.name = this.capitalizeFirstLetter(this.pokemonDetails.name);
      this.pokemonData.image = this.pokemonDetails.sprites.front_default;

      // Fetch the species this.pokemonDetails english language for the description
      this.http.get(this.pokemonDetails.species.url).subscribe((speciesData: any) => {
        const englishDescription = speciesData.flavor_text_entries.find((entry: any) => entry.language.name === 'en');
        this.pokemonData.description = englishDescription.flavor_text;

        // Extract evolutions
      this.http.get(speciesData.evolution_chain.url).subscribe((evolutionData: any) => {
        const chain = this.extractEvolutions(evolutionData.chain);
        this.pokemonData.evolutions = chain;
      });
      });

      // Extract types
      this.pokemonData.types = this.pokemonDetails.types.map((type: any) => ({name:type.type.name.replace(/"/g, '')
    }));

      // Extract stats
      this.pokemonData.stats = this.pokemonDetails.stats.map((stat: any) => ({
        name: stat.stat.name,
        value: stat.base_stat
      }));
  }

  /**
   * Extract evolutions list from pokemon details
   * @param chain
   * @returns evolutions
   */
  extractEvolutions(chain: any) {
    const evolutions = [];
    while (chain) {
      evolutions.push({
        name: chain.species.name,
        image: this.evolutionImageUrl+chain.species.url.split('/').slice(-2, -1)[0]+".png"
      });
      chain = chain.evolves_to[0];
    }
    return evolutions;
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
