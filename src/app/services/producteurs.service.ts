import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { producteurs } from '../data/Producteurs';
import { Producteur } from '../models/producteur';

@Injectable({
  providedIn: 'root'
})
export class ProducteursService {

  // Observable string sources
  private emitChangeSource = new Subject<any>();
  // Observable string streams
  producteurEmitted = this.emitChangeSource.asObservable();
  // Service message commands
  emitProducteur(producteur: Producteur) {
    this.emitChangeSource.next(producteur);
  }

  constructor() { }

  getProducteurs(firstProducteur: number, name: string): Producteur[] {

    var producteursSorted: Producteur[] = []

    if (name === '') {
      producteursSorted = producteurs
    }
    else {
      producteursSorted = producteurs.filter(producteur =>
        producteur.Lastname.toLowerCase().includes(name.toLowerCase()) ||
        producteur.Firstname.toLowerCase().includes(name.toLowerCase()))
    }

    var producteursList: Producteur[] = new Array(producteursSorted.length)

    var start = firstProducteur < producteursList.length -19 ? firstProducteur :producteursList.length -19
    var end = producteursList.length < 19 ? start + 19 : producteursList.length
   
    producteursSorted = producteursSorted.sort((a, b) =>
      a.Lastname.localeCompare(b.Lastname) === 0 ?
        a.Firstname.localeCompare(b.Firstname) :
        a.Lastname.localeCompare(b.Lastname)
    ).slice(start, end)

    for (let index = 0; index < 20; index++) {
      producteursList[index + firstProducteur] = producteursSorted[index];
    }

    return producteursList
  }
}
