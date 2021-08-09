import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoradingSequenceComponent } from './borading-sequence/borading-sequence.component';
import { RouterModule } from '@angular/router';
import { routes } from './boarding-sequence.routes';
import { DisplayBusBoardingSequenceComponent } from './display-bus-boarding-sequence/display-bus-boarding-sequence.component';

@NgModule({
  declarations: [
    BoradingSequenceComponent,
    DisplayBusBoardingSequenceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class BoardingSequenceModule { }
