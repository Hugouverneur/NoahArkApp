import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LotsService } from 'src/app/services/lots.service';

@Component({
  selector: 'app-detail-room',
  templateUrl: './detail-room.component.html',
  styleUrls: ['./detail-room.component.css']
})
export class DetailRoomComponent implements OnInit {

  lots: any = [];
  roomId;

  constructor(private lotsService: LotsService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.roomId = this.activatedRoute.snapshot.params['id'];
    this.getLots();
  }

  getLots() {
    this.lotsService.getLots(this.roomId).then((results) => {
      this.lots = results;      
    })
  }

}
