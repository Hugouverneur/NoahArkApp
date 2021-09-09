import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenusService } from 'src/app/services/genus.service';
import { SpiciesService } from 'src/app/services/spicies.service';

@Component({
  selector: 'app-new-spicies',
  templateUrl: './new-spicies.component.html',
  styleUrls: ['./new-spicies.component.css']
})
export class NewSpiciesComponent implements OnInit {

  addSpiciesForm: FormGroup;
  genus: any = [];

  constructor(private formBuilder: FormBuilder,
    private spiciesService: SpiciesService,
    private genusService: GenusService,
    private route: Router) { }

  ngOnInit(): void {
    this.getGenus();
    this.initaddSpiciesForm();
  }

  // Initialisation du formulaire
  initaddSpiciesForm() {
    this.addSpiciesForm = this.formBuilder.group({
      spicies_name: ['', [Validators.required]],
      genus_id: ['', [Validators.required]]
    });
  }

  onaddSpiciesFormSubmit() {
    const spicies_name: string = this.addSpiciesForm.get('spicies_name').value;
    const genus_id: number = this.addSpiciesForm.get('genus_id').value;
    const newSpicies = {spicies_name: spicies_name, genus_id: genus_id};
    return newSpicies;
  }

  createSpicies() {
    const newSpicies = this.onaddSpiciesFormSubmit();
    this.spiciesService.createSpicies(newSpicies);
    this.route.navigate(['/spicies-list']);
  }

  // Récupération de tous les embranchements
  getGenus() {
    this.genusService.getGenus().then((response: any) => {
      this.genus = response;
    })
  }

}
