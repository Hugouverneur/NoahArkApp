import { Component, OnInit } from '@angular/core';
import { FamilysService } from 'src/app/services/familys.service';

@Component({
  selector: 'app-list-family',
  templateUrl: './list-family.component.html',
  styleUrls: ['./list-family.component.css']
})
export class ListFamilyComponent implements OnInit {

  familys: any = [];

  constructor(private familysService: FamilysService) { }

  ngOnInit(): void {
    this.getFamilys();    
  }

  getFamilys() {
    this.familysService.getFamilys().then((response: any) => {
      this.familys = response;
    })
  }

}
