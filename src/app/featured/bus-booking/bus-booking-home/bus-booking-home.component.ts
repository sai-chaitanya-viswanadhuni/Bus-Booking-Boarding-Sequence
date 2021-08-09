import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export interface Place {
  key: string;
  value: string;
}

@Component({
  selector: 'app-bus-booking-home',
  templateUrl: './bus-booking-home.component.html',
  styleUrls: ['./bus-booking-home.component.scss']
})

export class BusBookingHomeComponent implements OnInit {

  pnumber = 1;

  place: Place[] = [];

  busSearchForm: FormGroup;

  sourcePlaces: string[] = [
    "Hyderabad",
    "Chennai",
    "Bangalore",
    "Delhi",
    "Indore",
  ]

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.busSearchForm = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      dateOfTravel: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  SearchBus() {
    const form: FormGroup = this.busSearchForm;
    let source = form.value.source;
    let destination;

    this.place.filter(iteam => {
      if (iteam.key == form.value.destination) {
        destination = iteam.value
      }
    })

    let date = form.value.dateOfTravel;
    let route: any = {
      source: source,
      destination: destination,
      date: date
    }
    localStorage.setItem("route", JSON.stringify(route))
    let routeId = form.value.destination;
    // this.BusService.getRoueId(routeId);
    this.router.navigateByUrl("busBook/search/buses");
  }

  onChangeSource(e: any) {
    let leavingfrom = e.target.value;
    console.log(leavingfrom)
    
    if (leavingfrom == 'Hyderabad') {
      this.place = [
        { key: '1109001', value: 'Chennai' },
        { key: '1109002', value: 'Bangalore' }
      ]
    }

    else if (leavingfrom == 'Chennai') {
      this.place = [
        { key: '3309003', value: 'Hyderabad' },
        { key: '3309001', value: 'Bangalore' },
      ]
    }

    else if (leavingfrom == 'Bangalore') {
      this.place = [
        { key: '3309003', value: 'Hyderabad' },
        { key: '3309001', value: 'Chennai' },
      ]
    }

    else if (leavingfrom == 'Indore') {
      this.place = [
        { key: '2209002', value: 'Bangalore' },
        { key: '2209001', value: 'Delhi' }
      ]
    }

    else if (leavingfrom == 'Delhi') {
      this.place = [
        { key: '3309003', value: 'Indore' },
        { key: '3309001', value: 'Bangalore' },
      ]
    }

  }

}

