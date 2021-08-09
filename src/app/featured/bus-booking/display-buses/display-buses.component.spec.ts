import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBusesComponent } from './display-buses.component';

describe('DisplayBusesComponent', () => {
  let component: DisplayBusesComponent;
  let fixture: ComponentFixture<DisplayBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
