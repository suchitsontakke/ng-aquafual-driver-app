import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkaroundChecklistComponent } from './walkaround-checklist.component';

describe('WalkaroundChecklistComponent', () => {
  let component: WalkaroundChecklistComponent;
  let fixture: ComponentFixture<WalkaroundChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalkaroundChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkaroundChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
