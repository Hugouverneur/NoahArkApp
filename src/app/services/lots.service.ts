import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class LotsService {

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
  
    getLots(lotId: number) {
      return this.request('GET', `${environment.serverUrl}/lot/${lotId}`);
    }
  
    createLots(lot) {
      return this.request('POST', `${environment.serverUrl}/lot`, lot);
    }

    moveLot(lot) {
      console.log(`${environment.serverUrl}/lot/${lot.lot_id}`);
      
      return this.request('PUT', `${environment.serverUrl}/lot/${lot.lot_id}`, lot)
    }
  
    deleteLot(lot) {
      return this.request('DELETE', `${environment.serverUrl}/lot/${lot.lot_id}`, lot);
    }
}
