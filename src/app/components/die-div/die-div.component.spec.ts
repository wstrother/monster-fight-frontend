import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieDivComponent } from './die-div.component';

describe('DieDivComponent', () => {
  let component: DieDivComponent;
  let fixture: ComponentFixture<DieDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
