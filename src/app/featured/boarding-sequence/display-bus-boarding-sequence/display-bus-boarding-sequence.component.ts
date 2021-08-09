import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-display-bus-boarding-sequence',
  templateUrl: './display-bus-boarding-sequence.component.html',
  styleUrls: ['./display-bus-boarding-sequence.component.scss']
})
export class DisplayBusBoardingSequenceComponent implements OnInit {

  Id: any;
  allBookingsOfBus: any[] = [];
  boardingSequenceListWithBookingID: any[] = [];
  finalBoardingSequence: any[] = [];
  noShowList: any[] = [];
  onLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.route.params.subscribe(params => {
      this.Id = params["id"];
      console.log(this.Id);
    });
  }

  ngOnInit(): void {
    this.apiService.getAllBookingsByBusId(this.Id).subscribe(
      (response) => {
        if (response.body) {
          this.allBookingsOfBus = response.body as [];
          console.log(this.allBookingsOfBus);
          this.getBoardingSequenceListWithBookingIDs();
        }
      }
    );
  }

  getBoardingSequenceListWithBookingIDs() {
    this.apiService.generateBoardingSequence(this.Id).subscribe(
      (response) => {
        if (response.body) {
          this.onLoading = false;
          this.boardingSequenceListWithBookingID = response.body as [];
          console.log(this.boardingSequenceListWithBookingID);
          this.generateFinalBoardingSequence();
        }
      }
    );
  }

  generateFinalBoardingSequence() {
    this.boardingSequenceListWithBookingID.forEach(
      bookingID => {
        console.log(this.allBookingsOfBus.find(booking => booking.busBookingId == bookingID));
        this.finalBoardingSequence.push(this.allBookingsOfBus.find(booking => booking.busBookingId == bookingID));
      }
    )
    console.log(this.finalBoardingSequence);
  }

  noShow(booking: any) {
    this.noShowList.push(booking);
    const index = this.finalBoardingSequence.indexOf(booking);
    this.finalBoardingSequence.splice(index, 1);
  }

  onBoard(booking: any) {
    const index = this.finalBoardingSequence.indexOf(booking);
    this.finalBoardingSequence.splice(index, 1);
  }

  onBoardNoShowPassenger(booking: any) {
    const index = this.noShowList.indexOf(booking);
    this.noShowList.splice(index, 1);
  }

  noShowPassengerFromNoShowList(booking: any) {
    const index = this.noShowList.indexOf(booking);
    this.noShowList.splice(index, 1);
    this.noShowList.push(booking);
  }

}
