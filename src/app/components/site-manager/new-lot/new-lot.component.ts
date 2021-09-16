import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LotsService } from 'src/app/services/lots.service';
import { SpiciesService } from 'src/app/services/spicies.service';

@Component({
  selector: 'app-new-lot',
  templateUrl: './new-lot.component.html',
  styleUrls: ['./new-lot.component.css']
})
export class NewLotComponent implements OnInit {

  addLotForm: FormGroup;
  roomId;
  species: any = [];

  constructor(private formBuilder: FormBuilder,
    private lotsService: LotsService,
    private spiciesService: SpiciesService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.roomId = this.activatedRoute.snapshot.params['id'];
    this.getAllSpecies();
    this.initAddLotForm();
  }

  // Initialisation du formulaire
  initAddLotForm() {
    this.addLotForm = this.formBuilder.group({
      species_id: ['', [Validators.required]]
    });
  }

  // Validation des données du formulaire
  onAddLotFormSubmit() {
    const species_id: number = this.addLotForm.get('species_id').value;
    const room_id = this.roomId;
    const newLot = {species_id:species_id, room_id:room_id};
    return newLot;
  }

  createLot() {
    const newLot = this.onAddLotFormSubmit();
    this.lotsService.createLots(newLot);
    this.route.navigate(['/detail-room/' + this.roomId]);
  }

  getAllSpecies() {
    this.spiciesService.getSpicies().then((results) => {
      this.species = results;      
    })
  }

}
