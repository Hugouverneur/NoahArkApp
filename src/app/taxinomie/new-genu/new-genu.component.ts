import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FamilysService } from 'src/app/services/familys.service';
import { GenusService } from 'src/app/services/genus.service';

@Component({
  selector: 'app-new-genu',
  templateUrl: './new-genu.component.html',
  styleUrls: ['./new-genu.component.css']
})
export class NewGenuComponent implements OnInit {

  addGenusForm: FormGroup;
  familys: any = [];

  constructor(private formBuilder: FormBuilder,
    private genusService: GenusService,
    private familysService: FamilysService,
    private route: Router) { }

  ngOnInit(): void {
    this.getFamilys();
    this.initaddGenusForm();
  }

  // Initialisation du formulaire
  initaddGenusForm() {
    this.addGenusForm = this.formBuilder.group({
      genus_name: ['', [Validators.required]],
      family_id: ['', [Validators.required]]
    });
  }

  // Validation des données du formulaire
  onaddGenusFormSubmit() {
    const genus_name: string = this.addGenusForm.get('genus_name').value;
    const family_id: number = this.addGenusForm.get('family_id').value;
    const newGenus = {genus_name: genus_name, family_id: family_id};
    return newGenus;
  }

  createGenus() {
    const newGenus = this.onaddGenusFormSubmit();
    this.genusService.createGenus(newGenus);
    this.route.navigate(['/genus-list']);
  }

  getFamilys() {
    this.familysService.getFamilys().then((response: any) => {
      this.familys = response;
    })
  }

}
