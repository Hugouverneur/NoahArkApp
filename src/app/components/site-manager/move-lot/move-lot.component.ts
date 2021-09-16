import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LotsService } from 'src/app/services/lots.service';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-move-lot',
  templateUrl: './move-lot.component.html',
  styleUrls: ['./move-lot.component.css']
})
export class MoveLotComponent implements OnInit {

  moveLotForm: FormGroup;
  lotId;
  rooms: any = [];

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private lotsService: LotsService,
    private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.lotId = this.activatedRoute.snapshot.params['id'];
    this.getRooms();
    this.initMoveLotForm();
  }

  // Initialisation du formulaire
  initMoveLotForm() {
    this.moveLotForm = this.formBuilder.group({
      room_id: ['', [Validators.required]]
    });
  }

  // Validation des données du formulaire
  onMoveLotFormSubmit() {
    const room_id: number = this.moveLotForm.get('room_id').value;
    const lot_id = this.lotId;
    const newLot = {room_id:room_id, lot_id:lot_id};
    return newLot;
  }

  moveLot() {
    const lot = this.onMoveLotFormSubmit();
    this.lotsService.moveLot(lot);
    this.route.navigate(['/detail-room/' + lot.lot_id]);
  }

  getRooms() {
    this.roomsService.getAllRooms().then((results) => {
      this.rooms = results;
    })
  }

}
