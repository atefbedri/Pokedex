import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionComponent } from './evolution.component';

describe('EvolutionComponent', () => {
  let component: EvolutionComponent;
  let fixture: ComponentFixture<EvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render evolutions with images and names', () => {
    const evolutions = [
      { name: 'pikachu', image: 'pikachu.png' },
      { name: 'raichu', image: 'raichu.png' }
    ];

    component.evolutions = evolutions;
    fixture.detectChanges();

    const evolutionElements = fixture.nativeElement.querySelectorAll('.evolution');
    expect(evolutionElements.length).toBe(1); // one image should be rendered

    const imageElements = fixture.nativeElement.querySelectorAll('.evolution-image img');
    expect(imageElements.length).toBe(2); // Two images should be rendered

    const nameElements = fixture.nativeElement.querySelectorAll('.evolution-image p');
    expect(nameElements.length).toBe(2); // Two names should be rendered

  });
});
