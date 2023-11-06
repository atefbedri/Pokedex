import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsComponent } from './stats.component';

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render stats with names, values, and progress bars', () => {
    const stats = [
      { name: 'HP', value: 80 },
      { name: 'ATK', value: 65 },
      { name: 'DEF', value: 70 }
    ];

    component.stats = stats;
    fixture.detectChanges();

    const abilityElements = fixture.nativeElement.querySelectorAll('.ability');
    expect(abilityElements.length).toBe(3); // 3 abilities should be rendered

    const nameElements = fixture.nativeElement.querySelectorAll('.ability-name');
    expect(nameElements.length).toBe(3); // 3 ability names should be rendered

    const valueElements = fixture.nativeElement.querySelectorAll('.ability-value');
    expect(valueElements.length).toBe(3); // 3 ability values should be rendered

    const progressBarElements = fixture.nativeElement.querySelectorAll('.progress-bar');
    expect(progressBarElements.length).toBe(3); // 3 progress bars should be rendered
  });
});
