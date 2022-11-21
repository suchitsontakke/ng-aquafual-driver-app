import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnfTruckTrailerComponent } from './cnf-truck-trailer.component';

describe('CnfTruckTrailerComponent', () => {
  let component: CnfTruckTrailerComponent;
  let fixture: ComponentFixture<CnfTruckTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnfTruckTrailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnfTruckTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
