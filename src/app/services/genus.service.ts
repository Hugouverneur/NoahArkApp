import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class GenusService {

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

  getGenus() {
    return this.request('GET', `${environment.serverUrl}/genus`);
  }

  createGenus(genus) {    
    return this.request('POST', `${environment.serverUrl}/genus`, genus);
  }

  deleteGenus(genus) {
    return this.request('DELETE', `${environment.serverUrl}/genus/${genus.genus_id}`, genus);
  }
}
