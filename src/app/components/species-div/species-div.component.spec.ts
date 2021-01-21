import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesDivComponent } from './species-div.component';

describe('SpeciesDivComponent', () => {
  let component: SpeciesDivComponent;
  let fixture: ComponentFixture<SpeciesDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciesDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
