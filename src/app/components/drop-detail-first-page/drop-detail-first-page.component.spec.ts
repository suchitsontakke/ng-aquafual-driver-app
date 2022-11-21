import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDetailFirstPageComponent } from './drop-detail-first-page.component';

describe('DropDetailFirstPageComponent', () => {
  let component: DropDetailFirstPageComponent;
  let fixture: ComponentFixture<DropDetailFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDetailFirstPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDetailFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
