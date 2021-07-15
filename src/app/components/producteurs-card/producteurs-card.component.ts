import { Component, OnInit, ViewChild } from '@angular/core';
import { Producteur } from 'src/app/models/producteur';
import { ProducteursService } from 'src/app/services/producteurs.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-producteurs-card',
  templateUrl: './producteurs-card.component.html',
  styleUrls: ['./producteurs-card.component.css']
})
export class ProducteursCardComponent implements OnInit {

  constructor(private producteurservice: ProducteursService,private sidenavService : SidenavService) { }
  Arr = Array

  producteur: Producteur = new Producteur;

  close(){
    this.sidenavService.closeProducteursCard(false);
  }
  
  ngOnInit(): void {
    this.producteurservice.producteurEmitted.subscribe(
      producteur => {
        this.producteur = producteur
      });
  }

}
