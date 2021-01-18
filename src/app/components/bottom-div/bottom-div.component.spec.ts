import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomDivComponent } from './bottom-div.component';

describe('BottomDivComponent', () => {
  let component: BottomDivComponent;
  let fixture: ComponentFixture<BottomDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
