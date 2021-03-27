import { Injectable } from '@angular/core';
import {Chien} from '../classes/chien';
import {HttpClient} from '@angular/common/http';
import {Maitre} from '../classes/maitre';

@Injectable({
  providedIn: 'root'
})
export class InscriptionMaitreService {

  URL = `http://localhost:8181/owners/`;
  maitre: Maitre;
  constructor(private http: HttpClient) { }

  insererMaitre(maitre: Maitre) {
    this.http.post(this.URL, maitre).toPromise()
      .then((newMaitre: Maitre) => {
        maitre = newMaitre;
      });
  }


}
