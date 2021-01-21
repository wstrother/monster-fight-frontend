import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharStatDivComponent } from './char-stat-div.component';

describe('CharStatDivComponent', () => {
  let component: CharStatDivComponent;
  let fixture: ComponentFixture<CharStatDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharStatDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharStatDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
