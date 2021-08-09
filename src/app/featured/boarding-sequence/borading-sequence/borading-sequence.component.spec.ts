import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoradingSequenceComponent } from './borading-sequence.component';

describe('BoradingSequenceComponent', () => {
  let component: BoradingSequenceComponent;
  let fixture: ComponentFixture<BoradingSequenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoradingSequenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoradingSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
