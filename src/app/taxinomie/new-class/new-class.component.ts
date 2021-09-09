import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';
import { PhylumsService } from 'src/app/services/phylums.service';

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.css']
})
export class NewClassComponent implements OnInit {

  addClassForm: FormGroup;
  phylums: any = [];

  constructor(private formBuilder: FormBuilder,
    private classService: ClassService,
    private phylumsService: PhylumsService,
    private route: Router) { }

  ngOnInit(): void {
    this.getPhylums();
    this.initaddClassForm();
  }

  // Initialisation du formulaire
  initaddClassForm() {
    this.addClassForm = this.formBuilder.group({
      class_name: ['', [Validators.required]],
      phylum_id: ['', [Validators.required]],
    });
  }

  // Validation des données du formulaire
  onaddClassFormSubmit() {
    const class_name: string = this.addClassForm.get('class_name').value;
    const phylum_id: number = this.addClassForm.get('phylum_id').value;
    const newClass = {class_name: class_name, phylum_id: phylum_id};
    return newClass;
  }

  // Créer une classe
  createClass() {
    const newClass = this.onaddClassFormSubmit();
    this.classService.createClass(newClass);
    this.route.navigate(['/classes-list']);
  }

  // Récupération de tous les embranchements
  getPhylums() {
    this.phylumsService.getPhylums().then((response: any) => {
      this.phylums = response;
    })
  }

}
