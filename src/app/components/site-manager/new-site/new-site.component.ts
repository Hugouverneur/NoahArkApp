import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-new-site',
  templateUrl: './new-site.component.html',
  styleUrls: ['./new-site.component.css']
})
export class NewSiteComponent implements OnInit {

  addSiteForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private siteService: SiteService,
    private route: Router) { }

  ngOnInit(): void {
    this.initaddSiteForm();
  }

  // Initialisation du formulaire
  initaddSiteForm() {
    this.addSiteForm = this.formBuilder.group({
      site_city: ['', [Validators.required]],
      site_country: ['', [Validators.required]],
    });
  }

  // Validation des données du formulaire
  onaddSiteFormSubmit() {
    const site_city: string = this.addSiteForm.get('site_city').value;
    const site_country: number = this.addSiteForm.get('site_country').value;
    const newSite = {site_city: site_city, site_country: site_country};
    return newSite;
  }

  createSite() {
    const newSite = this.onaddSiteFormSubmit();
    this.siteService.createSites(newSite);
    this.route.navigate(['/sites-list']);
  }

}
