import { Component, OnInit } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {

  classes: any = [];

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.getClass();
  }

  // Récupération de toutes les classes
  getClass() {
    this.classService.getClass().then((response: any) => {
      this.classes = response;
    })
  }

}
