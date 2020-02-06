import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Chien} from '../../classes/chien';
import {InscriptionChienService} from '../../services/inscription-chien.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-inscription-chien',
  templateUrl: './inscription-chien.component.html',
  styleUrls: ['./inscription-chien.component.scss']
})
export class InscriptionChienComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  chien: Chien = new Chien(null, null, null, null, null,
    null, null, null, null, null,
    null, null, null );
  id: number;

  constructor(private inscriptionChienService: InscriptionChienService) { }

  ngOnInit() {
  }

  onFileSelected(event: Event) {
    console.log(event);
  }
  //jean-marc
  envoyerChien(myForm: FormControl) {

  }

  inscrireChien() {
    this.inscriptionChienService.creerChien(this.chien);
    // this.chien = new Chien(null, null, null, null, null, null, null,
    //  null, null, null, null, null, null);
  }

  envoyerPhotoChien() {
      this.inscriptionChienService.creerPhotoChien(this.chien);
  }

}
