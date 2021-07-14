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

  getProducteursByName(name: string): Producteur[] {
    return producteurs.filter(producteur =>
      producteur.Lastname.toLowerCase().includes(name.toLowerCase()) ||
      producteur.Firstname.toLowerCase().includes(name.toLowerCase())
    )
  }

  getProducteurs(): Producteur[] {
    return producteurs
  }
}
