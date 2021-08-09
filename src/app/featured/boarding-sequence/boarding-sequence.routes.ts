import { Routes } from "@angular/router";
import { BoradingSequenceComponent } from "./borading-sequence/borading-sequence.component";
import { DisplayBusBoardingSequenceComponent } from "./display-bus-boarding-sequence/display-bus-boarding-sequence.component";

export const routes: Routes = [
    {
        path: '',
        component: BoradingSequenceComponent
    },
    {
        path: 'bus/:id',
        component: DisplayBusBoardingSequenceComponent
    }
]