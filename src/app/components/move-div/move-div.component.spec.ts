import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveDivComponent } from './move-div.component';

describe('MoveDivComponent', () => {
  let component: MoveDivComponent;
  let fixture: ComponentFixture<MoveDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
