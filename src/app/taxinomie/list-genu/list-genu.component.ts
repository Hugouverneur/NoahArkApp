import { Component, OnInit } from '@angular/core';
import { GenusService } from 'src/app/services/genus.service';

@Component({
  selector: 'app-list-genu',
  templateUrl: './list-genu.component.html',
  styleUrls: ['./list-genu.component.css']
})
export class ListGenuComponent implements OnInit {

  genus: any = [];

  constructor(private genusService: GenusService) { }

  ngOnInit(): void {
    this.getGenus();
  }

  // Récupération de tous les embranchements
  getGenus() {
    this.genusService.getGenus().then((response: any) => {
      this.genus = response;
    })
  }

}
