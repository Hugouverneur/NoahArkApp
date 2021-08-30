import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KingdomsService } from 'src/app/services/kingdoms.service';
import { PhylumsService } from 'src/app/services/phylums.service';

@Component({
  selector: 'app-new-phylum',
  templateUrl: './new-phylum.component.html',
  styleUrls: ['./new-phylum.component.css']
})
export class NewPhylumComponent implements OnInit {

  addPhylumForm: FormGroup;
  kingdoms: any = [];


  constructor(private formBuilder: FormBuilder,
    private phylumsService: PhylumsService,
    private kingdomsService: KingdomsService,
    private route: Router) { }

  ngOnInit(): void {
    this.getKingdoms();
    this.initaddPhylumForm();
  }

  // Initialisation du formulaire
  initaddPhylumForm() {
    this.addPhylumForm = this.formBuilder.group({
      phylum_name: ['', [Validators.required]],
      kingdom_id: ['', [Validators.required]]
    });
  }

  // Validation des données du formulaire
  onaddPhylumFormSubmit() {
    const phylum_name: string = this.addPhylumForm.get('phylum_name').value;
    const kingdom_id: number = this.addPhylumForm.get('kingdom_id').value;
    const newKingdom = {phylum_name: phylum_name, kingdom_id: kingdom_id};
    return newKingdom;
  }

  // Créer une classe
  createPhylum() {
    const newPhylum = this.onaddPhylumFormSubmit();
    this.phylumsService.createPhylums(newPhylum);
    this.route.navigate(['/phylums-list']);
  }

  // Récupération de tous les règnes
  getKingdoms() {
    this.kingdomsService.getKingdoms().then((response: any) => {
      console.log(response);
      this.kingdoms = response;
    })
  }

}
