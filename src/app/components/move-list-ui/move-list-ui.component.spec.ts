import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveListUiComponent } from './move-list-ui.component';

describe('MoveListUiComponent', () => {
  let component: MoveListUiComponent;
  let fixture: ComponentFixture<MoveListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
