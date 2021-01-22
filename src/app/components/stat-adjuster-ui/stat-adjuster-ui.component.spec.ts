import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAdjusterUiComponent } from './stat-adjuster-ui.component';

describe('StatAdjusterUiComponent', () => {
  let component: StatAdjusterUiComponent;
  let fixture: ComponentFixture<StatAdjusterUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatAdjusterUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatAdjusterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
