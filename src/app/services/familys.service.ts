import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FamilysService {

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

  getFamilys() {
    return this.request('GET', `${environment.serverUrl}/familys`);
  }

  createFamilys(family) {    
    return this.request('POST', `${environment.serverUrl}/familys`, family);
  }

  deleteFamilys(family) {
    return this.request('DELETE', `${environment.serverUrl}/familys/${family.family_id}`, family);
  }
}
