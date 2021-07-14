import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Producteur } from 'src/app/models/producteur';
import { ProducteursService } from 'src/app/services/producteurs.service';

@Component({
  selector: 'app-producteurs-card',
  templateUrl: './producteurs-card.component.html',
  styleUrls: ['./producteurs-card.component.css']
})
export class ProducteursCardComponent implements OnInit {

  constructor(private producteurservice: ProducteursService) { }
  producteur: Producteur = new Producteur;

  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  addres = new FormControl('', [Validators.required]);

  getErrorMessage() {
      return 'You must enter a value'; 
  }

  ngOnInit(): void {
    this.producteurservice.producteurEmitted.subscribe(
      producteur => {
        this.producteur = producteur
      });
    
  }

}
