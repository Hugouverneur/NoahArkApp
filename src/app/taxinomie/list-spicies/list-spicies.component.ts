import { Component, OnInit } from '@angular/core';
import { SpiciesService } from 'src/app/services/spicies.service';

@Component({
  selector: 'app-list-spicies',
  templateUrl: './list-spicies.component.html',
  styleUrls: ['./list-spicies.component.css']
})
export class ListSpiciesComponent implements OnInit {

  species: any = [];

  constructor(private spiciesService: SpiciesService) { }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies() {
    this.spiciesService.getSpicies().then((response: any) => {
      console.log(response);
      
      this.species = response;
    })
  }

}
