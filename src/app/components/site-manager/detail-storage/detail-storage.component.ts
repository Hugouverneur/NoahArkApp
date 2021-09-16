import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-detail-storage',
  templateUrl: './detail-storage.component.html',
  styleUrls: ['./detail-storage.component.css']
})
export class DetailStorageComponent implements OnInit {

  stockageId: number;
  rooms: any = [];

  constructor(private activatedRoute: ActivatedRoute,
    private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.stockageId = this.activatedRoute.snapshot.params['id'];
    this.getRooms();
  }

  getRooms() {
    this.roomsService.getRooms(this.stockageId).then((response: any) => {
      this.rooms = response;
    })
  }

}
