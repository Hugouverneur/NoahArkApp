import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KingdomsService } from 'src/app/services/kingdoms.service';

@Component({
  selector: 'app-new-kingdom',
  templateUrl: './new-kingdom.component.html',
  styleUrls: ['./new-kingdom.component.css']
})
export class NewKingdomComponent implements OnInit {

  addKingdomForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private kingdomService: KingdomsService, private route: Router) { }

  ngOnInit(): void {
    this.initaddKingdomForm();
  }

  // Initialisation du formulaire
  initaddKingdomForm() {
    this.addKingdomForm = this.formBuilder.group({
      kingdom_name: ['', [Validators.required]],
    });
  }

  // Validation des données du formulaire
  onaddKingdomFormSubmit() {
    const kingdom_name: string = this.addKingdomForm.get('kingdom_name').value;
    const newKingdom = {kingdom_name: kingdom_name};
    return newKingdom;
  }

  // Créer une classe
  createKingdom() {
    const newKingdom = this.onaddKingdomFormSubmit();
    this.kingdomService.createKingdom(newKingdom);
    this.route.navigate(['/kingdoms-list']);
  }

}
