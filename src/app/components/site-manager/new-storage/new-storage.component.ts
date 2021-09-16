import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-new-storage',
  templateUrl: './new-storage.component.html',
  styleUrls: ['./new-storage.component.css']
})
export class NewStorageComponent implements OnInit {

  addstorageForm: FormGroup;
  siteId

  constructor(private formBuilder: FormBuilder,
    private storageService: StorageService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.siteId = this.activatedRoute.snapshot.params['id'];
    this.initAddstorageForm();
  }

  // Initialisation du formulaire
  initAddstorageForm() {
    this.addstorageForm = this.formBuilder.group({
      storage_numberofroom: ['', [Validators.required]],
    });
  }

  // Validation des données du formulaire
  onAddstorageFormSubmit() {
    const storage_numberofroom: string = this.addstorageForm.get('storage_numberofroom').value;
    const site_id = this.siteId;
    const newStorage = {storage_numberofroom: storage_numberofroom, site_id: site_id};
    return newStorage;
  }

  createStorage() {
    const newStorage = this.onAddstorageFormSubmit();
    this.storageService.createStorages(newStorage);
    this.route.navigate(['/site-detail/' + this.siteId]);
  }

}
