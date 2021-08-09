import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookingHomeComponent } from './bus-booking-home.component';

describe('BusBookingHomeComponent', () => {
  let component: BusBookingHomeComponent;
  let fixture: ComponentFixture<BusBookingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusBookingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusBookingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
