import { Injectable } from '@angular/core';
import {Chien} from '../classes/chien';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InscriptionChienService {

  URL = `http://localhost:8181/dogs/`;
  chien: Chien;
  constructor(private http: HttpClient) { }

  creerChien(chien: Chien) {
    this.http.post(this.URL, chien).toPromise()
      .then((monChien: Chien) => {
        chien = monChien;
      });
  }

  creerPhotoChien(chien: Chien) {
  }


}
