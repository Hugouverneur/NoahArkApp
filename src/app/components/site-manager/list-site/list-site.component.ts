import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-list-site',
  templateUrl: './list-site.component.html',
  styleUrls: ['./list-site.component.css']
})
export class ListSiteComponent implements OnInit {

  sites: any = [];

  constructor(private siteService: SiteService) { }

  ngOnInit(): void {
    this.getSites();
  }

  getSites() {
    this.siteService.getSites().then((response: any) => {
      this.sites = response;
    })
  }

}
