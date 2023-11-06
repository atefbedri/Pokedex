import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit Pokemon details on search', () => {
    const pokemonDetails = {/* your test Pokemon details here */};
    spyOn(component.emitPokemonDetails, 'emit');
    component.searchInput = 'pikachu';

    component.search();

    expect(component.emitPokemonDetails.emit).toHaveBeenCalledWith(pokemonDetails);
  });

  it('should generate a random number and call search', () => {
    spyOn(component, 'search');

    component.generateRandomNumber();

    expect(component.search).toHaveBeenCalled();
  });
});
