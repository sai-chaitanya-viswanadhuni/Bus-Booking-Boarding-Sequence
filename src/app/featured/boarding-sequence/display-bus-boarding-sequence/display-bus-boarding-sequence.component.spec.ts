import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBusBoardingSequenceComponent } from './display-bus-boarding-sequence.component';

describe('DisplayBusBoardingSequenceComponent', () => {
  let component: DisplayBusBoardingSequenceComponent;
  let fixture: ComponentFixture<DisplayBusBoardingSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayBusBoardingSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayBusBoardingSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
