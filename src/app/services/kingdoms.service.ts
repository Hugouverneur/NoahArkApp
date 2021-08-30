import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class KingdomsService {

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

  // Récupération des kingdoms
  getKingdoms() {
    return this.request('GET', `${environment.serverUrl}/kingdoms`);
  }

  // Creation d'un nouveau kingdom
  createKingdom(kingdom) {
    console.log('Front');
    
    return this.request('POST', `${environment.serverUrl}/kingdoms`, kingdom);
  }

  // Suppression d'un kingdom
  deleteKingdom(kingdom) {
    return this.request('DELETE', `${environment.serverUrl}/kingdoms/${kingdom.kingdom_id}`, kingdom);
  }
}
