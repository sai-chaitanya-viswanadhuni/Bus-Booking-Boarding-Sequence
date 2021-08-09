import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusGridComponent } from './bus-grid.component';

describe('BusGridComponent', () => {
  let component: BusGridComponent;
  let fixture: ComponentFixture<BusGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
