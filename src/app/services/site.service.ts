import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SiteService {

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

  getSites() {
    return this.request('GET', `${environment.serverUrl}/site`);
  }

  createSites(site) {    
    return this.request('POST', `${environment.serverUrl}/site`, site);
  }

  deleteSite(site) {
    return this.request('DELETE', `${environment.serverUrl}/site/${site.site_id}`, site);
  }
}
