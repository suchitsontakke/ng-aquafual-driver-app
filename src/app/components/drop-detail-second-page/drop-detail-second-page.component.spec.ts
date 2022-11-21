import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDetailSecondPageComponent } from './drop-detail-second-page.component';

describe('DropDetailSecondPageComponent', () => {
  let component: DropDetailSecondPageComponent;
  let fixture: ComponentFixture<DropDetailSecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDetailSecondPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDetailSecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
