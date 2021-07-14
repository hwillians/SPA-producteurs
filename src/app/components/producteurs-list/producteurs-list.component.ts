import { Component, OnInit } from '@angular/core';
import { Producteur } from 'src/app/models/producteur';
import { ProducteursService } from 'src/app/services/producteurs.service';


@Component({
  selector: 'app-producteurs-list',
  templateUrl: './producteurs-list.component.html',
  styleUrls: ['./producteurs-list.component.css']
})
export class ProducteursListComponent implements OnInit {

  constructor(private producteurservice: ProducteursService) {

  } 

  producteurs: Producteur[] = [];
  name: string = ''

  getProducteur(producteur: Producteur) {
    this.producteurservice.emitProducteur(producteur);
  }


  getProducteursByName(event: KeyboardEvent) {
    this.name = (<HTMLInputElement>event.target).value
    this.name === '' ? this.ngOnInit() :
      this.producteurs = this.producteurservice.getProducteursByName(this.name);
  }

  Totalrendement(producteur: Producteur): number {
    let total = 0
    producteur.Rendements?.forEach(rend =>
      total += rend.AreaExploited
    )
    return total
  }

  ngOnInit(): void {
    this.producteurs = this.producteurservice.getProducteurs()
  }

}
