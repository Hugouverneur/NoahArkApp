import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.css']
})
export class NewRoomComponent implements OnInit {

  addRoomForm: FormGroup;
  storageId;

  constructor(private formBuilder: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.storageId = this.activatedRoute.snapshot.params['id'];
    this.initAddRoomForm();
  }

  // Initialisation du formulaire
  initAddRoomForm() {
    this.addRoomForm = this.formBuilder.group({
      room_name: ['', [Validators.required]],
      brightness_value: ['', [Validators.required]],
      temperature_value: ['', [Validators.required]],
      humidity_value: ['', [Validators.required]],
      room_capacity: ['', [Validators.required]],
    });
  }

  // Validation des données du formulaire
  onAddRoomFormSubmit() {
    const room_name: string = this.addRoomForm.get('room_name').value;
    const brightness_value: number = this.addRoomForm.get('brightness_value').value;
    const temperature_value: number = this.addRoomForm.get('temperature_value').value;
    const humidity_value: number = this.addRoomForm.get('humidity_value').value;
    const room_capacity: number = this.addRoomForm.get('room_capacity').value;
    const storage_id = this.storageId;
    const newRoom = {room_name:room_name, brightness_value:brightness_value, temperature_value:temperature_value, humidity_value:humidity_value, room_capacity:room_capacity, storage_id:storage_id};
    return newRoom;
  }

  createRoom() {
    const newRoom = this.onAddRoomFormSubmit();
    this.roomsService.createRooms(newRoom);
    this.route.navigate(['/detail-storage/' + this.storageId]);
  }

}
