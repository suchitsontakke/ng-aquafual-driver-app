import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogShiftHoursComponent } from './log-shift-hours.component';

describe('LogShiftHoursComponent', () => {
  let component: LogShiftHoursComponent;
  let fixture: ComponentFixture<LogShiftHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogShiftHoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogShiftHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
