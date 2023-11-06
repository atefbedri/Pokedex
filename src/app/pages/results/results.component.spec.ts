import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.currentTab).toBe('STATS');
    expect(component.pokemonDetails).toBeNull();
    expect(component.pokemonData).toEqual({});
    expect(component.evolutionImageUrl).toEqual("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/");
  });

  it('should call fetchPokemonDetails when getPokemonDetails is called', () => {
    spyOn(component, 'fetchPokemonDetails');
    const pokemonDetails = { name: 'pikachu' };
    component.getPokemonDetails(pokemonDetails);
    expect(component.pokemonDetails).toEqual(pokemonDetails);
    expect(component.fetchPokemonDetails).toHaveBeenCalled();
  });

  it('should reset the component', () => {
    spyOn(window.location, 'reload');
    component.reset();
    expect(window.location.reload).toHaveBeenCalled();
  });
});
