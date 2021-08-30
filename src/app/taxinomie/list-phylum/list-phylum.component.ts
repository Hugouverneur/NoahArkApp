import { Component, OnInit } from '@angular/core';
import { PhylumsService } from 'src/app/services/phylums.service';

@Component({
  selector: 'app-list-phylum',
  templateUrl: './list-phylum.component.html',
  styleUrls: ['./list-phylum.component.css']
})
export class ListPhylumComponent implements OnInit {

  phylums: any = [];

  constructor(private phylumsService: PhylumsService) { }

  ngOnInit(): void {
    this.getPhylums();
  }

  // Récupération de tous les embranchements
  getPhylums() {
    this.phylumsService.getPhylums().then((response: any) => {
      console.log(response);
      this.phylums = response;
    })
  }

}
