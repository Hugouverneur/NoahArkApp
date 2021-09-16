import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-detail-site',
  templateUrl: './detail-site.component.html',
  styleUrls: ['./detail-site.component.css']
})
export class DetailSiteComponent implements OnInit {

  storages: any = [];
  siteId;

  constructor(private storageService: StorageService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.siteId = this.route.snapshot.params['id'];
    this.getStorages();
  }

  getStorages() {
    this.storageService.getStorages(this.siteId).then((response: any) => {
      this.storages = response;
    })
  }


}
