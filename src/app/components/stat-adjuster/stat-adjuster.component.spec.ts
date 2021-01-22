import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAdjusterComponent } from './stat-adjuster.component';

describe('StatAdjusterComponent', () => {
  let component: StatAdjusterComponent;
  let fixture: ComponentFixture<StatAdjusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatAdjusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
