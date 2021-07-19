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
  personal :boolean= true
  producteur: Producteur = new Producteur;

  close(){
    this.sidenavService.closeProducteursCard(false);
  }

  swich(choix?:boolean){
    if (choix == undefined) {
      this.personal=!this.personal
    }
    else {
      this.personal=choix
    }
  }

  ngDoCheck(){
    this.producteurservice.emitProducteur(this.producteur);
  }
  
  ngOnInit(): void {
    this.producteurservice.producteurEmitted.subscribe(
      producteur => {
        this.producteur = producteur
      });
  }

}
