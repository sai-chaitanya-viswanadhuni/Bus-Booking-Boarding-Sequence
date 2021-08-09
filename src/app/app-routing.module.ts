import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { UserSignupComponent } from './core/user-signup/user-signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: UserSignupComponent
  },
  {
    path: 'busBook',
    loadChildren: () => import('./featured/bus-booking/bus-booking.module').then(m => m.BusBookingModule)
  },
  {
    path: 'boardingSequence',
    loadChildren: () => import('./featured/boarding-sequence/boarding-sequence.module').then(m => m.BoardingSequenceModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
