import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FamilysService } from 'src/app/services/familys.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-new-family',
  templateUrl: './new-family.component.html',
  styleUrls: ['./new-family.component.css']
})
export class NewFamilyComponent implements OnInit {

  addFamilyForm: FormGroup;
  orders: any = [];


  constructor(private formBuilder: FormBuilder,
    private familysService: FamilysService,
    private ordersService: OrdersService,
    private route: Router) { }

  ngOnInit(): void {
    this.getOrders();
    this.initaddFamilyForm();
  }

  // Initialisation du formulaire
  initaddFamilyForm() {
    this.addFamilyForm = this.formBuilder.group({
      family_name: ['', [Validators.required]],
      order_id: ['', [Validators.required]]
    });
  }

  // Validation des données du formulaire
  onaddFamilyFormSubmit() {
    const family_name: string = this.addFamilyForm.get('family_name').value;
    const order_id: number = this.addFamilyForm.get('order_id').value;
    const newFamily = {family_name: family_name, order_id: order_id};
    return newFamily;
  }

  createFamily() {
    const newFamily = this.onaddFamilyFormSubmit();
    this.familysService.createFamilys(newFamily);
    this.route.navigate(['/familys-list']);
  }

  getOrders() {
    this.ordersService.getOrders().then((response: any) => {
      this.orders = response;
    })
  }

}
