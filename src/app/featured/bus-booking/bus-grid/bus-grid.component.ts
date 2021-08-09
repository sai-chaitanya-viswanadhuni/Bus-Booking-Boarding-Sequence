import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

export interface SelectedSeat {
  seatRow: String;
  seatRowIndex: number,
  age: String;
  name: String;
}

@Component({
  selector: 'app-bus-grid',
  templateUrl: './bus-grid.component.html',
  styleUrls: ['./bus-grid.component.scss']
})
export class BusGridComponent implements OnInit {

  busGrid: any = {
    A: [false, false, false, false],
    B: [false, false, false, false],
    C: [false, false, false, false],
    D: [false, false, false, false],
    E: [false, false, false, false],
    F: [false, false, false, false],
    G: [false, false, false, false],
    H: [false, false, false, false],
    I: [false, false, false, false],
    J: [false, false, false, false],
    K: [false, false, false, false],
    L: [false, false, false, false]
  }

  selectedSeatsList: SelectedSeat[] = [];
  bookedSeatsList: any = {};

  @Input() busDetails: any;
  @Input() bookingRouteDetails: any;

  constructor(
    private ref: ChangeDetectorRef,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAllBookingsByBusId(this.busDetails?.busId).subscribe((response) => {
      if (response.body != null) {
        console.log(response.body);
        const bookingsList: any[] = response.body as any[];
        console.log(bookingsList);
        bookingsList.forEach(booking => {
          booking.tickets.forEach((ticket: any) => {
            const seatName = ticket.busSeat.seatName;
            try {
              this.busGrid[seatName[0]][seatName[1] - 1] = true;
              this.bookedSeatsList[seatName] = true
            } catch (error) {
              console.error(seatName);
            }
          });
        });
      }
    })
  }

  onSeatSelect(seatRow: any, seatRowIndex: any) {
    if (this.bookedSeatsList[seatRow + (seatRowIndex + 1)]) {
      alert("Already Booked !")
      return;
    }
    if (this.selectedSeatsList.length > 3) {
      alert("You can only book maximum 4 tickets");
      return;
    }
    this.busGrid[seatRow][seatRowIndex] = !this.busGrid[seatRow][seatRowIndex];
    if (this.busGrid[seatRow][seatRowIndex])
      this.selectedSeatsList.push(
        {
          "seatRow": seatRow,
          "seatRowIndex": seatRowIndex,
          "age": this.randomAgeGenerate().toString(),
          "name": this.randomNameGenerate()
        }
      );
    else
      this.selectedSeatsList = this.selectedSeatsList.filter(x => x.seatRow != seatRow && x.seatRowIndex != seatRowIndex)
    console.log(this.selectedSeatsList);
    this.ref.detectChanges()
  }

  trackByFn(item: any) {
    return item;
  }

  getIndexColumn(row: any) {
    return row.value;
  }

  getColor(row: any, index: any) {
    if (this.bookedSeatsList[row.key + (index + 1)])
      return "yellow"

    else if (row.value[index]) {
      return "red";
    }
    else
      return "green";
  }

  onSubmit() {
    let ticketDetails: any[] = [];
    let totalFare: any = 0;
    this.selectedSeatsList.forEach(selectedSeat => {
      ticketDetails.push(
        {
          "busSeat": {
            "seatName": selectedSeat.seatRow + (selectedSeat.seatRowIndex + 1).toString(),
            "seatStatus": "Booked"
          },
          "passenger": {
            "passengerAge": selectedSeat.age,
            "passengerName": selectedSeat.name
          },
          "ticketFare": this.busDetails?.fare
        }
      );
      console.log(this.busDetails?.fare);
      console.log(totalFare);
      totalFare += parseInt(this.busDetails?.fare);
    });

    let reqBody = {
      "busID": this.busDetails?.busId,
      "dateOfBooking": new Date(),
      "dateOfJourney": this.bookingRouteDetails?.date,
      "fare": totalFare,
      "userID": 6,
      "ticketDetails": ticketDetails
    }

    console.log(reqBody);

    this.apiService.bookBusTickets(reqBody).subscribe(
      (response) => {
        if (response.status == 200 || response.status == 201)
          alert("Your Tickets Booking is Successful");
      }
    )


  }

  randomNameGenerate = () => {
    let res = '';
    for (let i = 0; i < 8; i++) {
      const random = Math.floor(Math.random() * 27);
      res += String.fromCharCode(97 + random);
    };
    return res;
  };

  randomAgeGenerate = () => {
    return Math.floor(Math.random() * 90 + 10);
  };

}
