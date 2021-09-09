import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassService } from 'src/app/services/class.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  addOrderForm: FormGroup;
  classes: any = [];

  constructor(private formBuilder: FormBuilder,
    private ordersService: OrdersService,
    private classService: ClassService,
    private route: Router) { }

  ngOnInit(): void {
    this.getClass();
    this.initaddPhylumForm();
  }

  // Initialisation du formulaire
  initaddPhylumForm() {
    this.addOrderForm = this.formBuilder.group({
      order_name: ['', [Validators.required]],
      class_id: ['', [Validators.required]]
    });
  }

  // Validation des données du formulaire
  onaddOrderFormSubmit() {
    const order_name: string = this.addOrderForm.get('order_name').value;
    const class_id: number = this.addOrderForm.get('class_id').value;
    const newOrder = {order_name: order_name, class_id: class_id};
    return newOrder;
  }

  createOrder() {
    const newOrder = this.onaddOrderFormSubmit();
    this.ordersService.createOrders(newOrder);
    this.route.navigate(['/orders-list']);
  }

  // Récupération de toutes les classes
  getClass() {
    this.classService.getClass().then((response: any) => {
      this.classes = response;
    })
  }

}
