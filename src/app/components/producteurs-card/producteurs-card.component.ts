import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatGridTile } from '@angular/material/grid-list';
import { Producteur } from 'src/app/models/producteur';
import { ProducteursService } from 'src/app/services/producteurs.service';

@Component({
  selector: 'app-producteurs-card',
  templateUrl: './producteurs-card.component.html',
  styleUrls: ['./producteurs-card.component.css']
})
export class ProducteursCardComponent implements OnInit {

  constructor(private producteurservice: ProducteursService) { }
  Arr = Array

  producteur: Producteur = new Producteur;
  
  ngOnInit(): void {
    
    this.producteurservice.producteurEmitted.subscribe(
      producteur => {
        this.producteur = producteur
      });
    
  }

}
