import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getAllBookingsByBusId(busId: number) {
    const URL = `${environment.apiUrl}/api/v1/bus/bookings/all/${busId}`;
    return this.httpClient.get(URL, { observe: 'response' });
  }

  getAllBuses() {
    const URL = environment.apiUrl + "/api/v1/bus/all";
    return this.httpClient.get(URL, { observe: 'response' });
  }

  bookBusTickets(reqBody: any) {
    const URL = environment.apiUrl + "/api/v1/bus/book/tickets";
    return this.httpClient.post(URL, reqBody, { observe: 'response', responseType: 'text' });
  }

  generateBoardingSequence(busId: any) {
    const URL = environment.apiUrl + "/api/v1/getBoardingSequence/" + busId;
    return this.httpClient.get(URL, { observe: 'response' });
  }
}
