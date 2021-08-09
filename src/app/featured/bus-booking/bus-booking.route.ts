import { Routes } from "@angular/router";
import { BusBookingHomeComponent } from "./bus-booking-home/bus-booking-home.component";
import { DisplayBusesComponent } from "./display-buses/display-buses.component";

export const routes: Routes = [
    {
        path: '',
        component: BusBookingHomeComponent
    },
    {
        path: 'search/buses',
        component: DisplayBusesComponent
    }
]