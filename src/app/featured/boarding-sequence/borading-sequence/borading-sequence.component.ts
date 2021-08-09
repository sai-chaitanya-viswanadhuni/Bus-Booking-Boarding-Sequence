import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-borading-sequence',
  templateUrl: './borading-sequence.component.html',
  styleUrls: ['./borading-sequence.component.scss']
})
export class BoradingSequenceComponent implements OnInit {

  constructor(private apiSerivce: ApiService) { }

  buses: any[] = [];

  ngOnInit(): void {

    this.apiSerivce.getAllBuses().subscribe((response) => {
      if (response.body != null) {
        this.buses = response.body as [];
      }
    })

  }

}
