import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklySignoffSheetComponent } from './weekly-signoff-sheet.component';

describe('WeeklySignoffSheetComponent', () => {
  let component: WeeklySignoffSheetComponent;
  let fixture: ComponentFixture<WeeklySignoffSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklySignoffSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklySignoffSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
