import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  // Methode préfaite pour faire nos requetes vers la base de donnée
  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });

    return new Promise((resolve, reject) => {
      result.subscribe(resolve, reject);
    });
  }

  getOrders() {
    return this.request('GET', `${environment.serverUrl}/orders`);
  }

  createOrders(order) {    
    return this.request('POST', `${environment.serverUrl}/orders`, order);
  }

  deleteOrders(order) {
    return this.request('DELETE', `${environment.serverUrl}/orders/${order.order_id}`, order);
  }
}
