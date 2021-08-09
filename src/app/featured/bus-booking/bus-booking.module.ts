import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusBookingHomeComponent } from './bus-booking-home/bus-booking-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './bus-booking.route';
import { DisplayBusesComponent } from './display-buses/display-buses.component';
import { BusGridComponent } from './bus-grid/bus-grid.component';

@NgModule({
  declarations: [
    BusBookingHomeComponent,
    DisplayBusesComponent,
    BusGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BusBookingModule { }
