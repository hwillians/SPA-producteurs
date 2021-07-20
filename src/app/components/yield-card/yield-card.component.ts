import { Component, OnInit } from '@angular/core';
import { Producteur } from 'src/app/models/producteur';
import { Rendement } from 'src/app/models/rendement';
import { ProducteursService } from 'src/app/services/producteurs.service';

@Component({
  selector: 'app-yield-card',
  templateUrl: './yield-card.component.html',
  styleUrls: ['./yield-card.component.css']
})
export class YieldCardComponent implements OnInit {

  constructor(private producteurservice: ProducteursService) { }

  producteur: Producteur = new Producteur;
  rendement!: Rendement;
  panelOpenState = false;

  getErrorMessage() {
    return 'You must enter a value';
  }

  save() {
    this.producteur.Rendements?.push(this.rendement)
    this.rendement = new Rendement
  }

  ngOnInit(): void {
   
    this.producteurservice.producteurEmitted.subscribe(
      producteur => {
        this.producteur = producteur
      });
  }

}
