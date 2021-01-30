import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovesAdjusterComponent } from './moves-adjuster.component';

describe('MovesAdjusterComponent', () => {
  let component: MovesAdjusterComponent;
  let fixture: ComponentFixture<MovesAdjusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovesAdjusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovesAdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
