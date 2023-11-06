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

    // Extract types names and background color
    this.pokemonData.types = this.pokemonDetails.types.map((type: any) => {
      const typeName = type.type.name.replace(/"/g, '');
      const backgroundColor = this.getColorForType(typeName);
      return { name: typeName, bg: backgroundColor };
    });

      // Extract stats
      this.pokemonData.stats = this.pokemonDetails.stats.map((stat: any) => ({
        name: stat.stat.name,
        value: stat.base_stat
      }));

      console.log(this.pokemonData);

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

  getColorForType(type: string): string {
    // Define a mapping of types to colors
    // TODO need to check for the right color from FIGMA
    const typeColors: any = {
      normal: '#A8A87B',
      fire: '#EE803B',
      water: '#559EDF',
      grass: '#88BE5D',
      electric: '#F7CF43',
      ice: '#9AD8D8',
      fight: '#BE322E',
      poison: '#B563CE',
      ground: '#DFBF6E',
      flight: '#A893ED',
      psychic: '#EC5C89',
      bug: '#A8B732',
      rock: '#B89F41',
      ghost: '#705A97',
      dark: '#705849',
      dragon: '#7043F4',
      street: '#B8B9CF',
      fairy: '#EFB7BD'
    };
    // Return type color if existe or normal as default color
    return typeColors[type] || '#A8A87B';
  }

  reset() : void{
    location.reload();
  }
}
