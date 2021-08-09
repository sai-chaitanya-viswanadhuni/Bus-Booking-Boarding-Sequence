import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
@Component({
  selector: 'app-display-buses',
  templateUrl: './display-buses.component.html',
  styleUrls: ['./display-buses.component.scss']
})
export class DisplayBusesComponent implements OnInit {

  buses: any[] = [];

  route: any;
  activeBusID: any;
  bookingDetails: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getAllBuses().subscribe(
      (response) => {
        if (response.body) {
          console.log(response.body);
          this.buses = response.body as any[];
        }
      }
    )
    const route: any = localStorage.getItem("route");
    this.route = JSON.parse(route);
    if (!this.route) {
      this.router.navigate([''])
    }

  }

  onOpenSeats(b: any) {
    this.activeBusID = b.busId;
  }

  closeSeatsDialog() {
    this.activeBusID = null;
  }

}
