import { Component, OnInit } from '@angular/core';
import { KingdomsService } from 'src/app/services/kingdoms.service';

@Component({
  selector: 'app-list-kingdom',
  templateUrl: './list-kingdom.component.html',
  styleUrls: ['./list-kingdom.component.css']
})
export class ListKingdomComponent implements OnInit {

  kingdoms: any = [];

  constructor(private kingdomsService: KingdomsService) { }

  ngOnInit(): void {
    this.getKingdoms();
  }

  // Récupération de tous les règnes
  getKingdoms() {
    this.kingdomsService.getKingdoms().then((response: any) => {
      console.log(response);
      this.kingdoms = response;
    })
  }

}
