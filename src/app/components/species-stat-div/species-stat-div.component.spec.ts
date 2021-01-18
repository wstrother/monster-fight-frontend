import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesStatDivComponent } from './species-stat-div.component';

describe('SpeciesStatDivComponent', () => {
  let component: SpeciesStatDivComponent;
  let fixture: ComponentFixture<SpeciesStatDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesStatDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesStatDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
