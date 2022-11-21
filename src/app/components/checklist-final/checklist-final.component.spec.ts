import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistFinalComponent } from './checklist-final.component';

describe('ChecklistFinalComponent', () => {
  let component: ChecklistFinalComponent;
  let fixture: ComponentFixture<ChecklistFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistFinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
