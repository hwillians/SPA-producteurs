import { Component, OnInit } from '@angular/core';
import { Producteur } from 'src/app/models/producteur';
import { LocationService } from 'src/app/services/location.service';
import { ProducteursService } from 'src/app/services/producteurs.service';
import { SidenavService } from 'src/app/services/sidenav.service';


@Component({
  selector: 'app-producteurs-list',
  templateUrl: './producteurs-list.component.html',
  styleUrls: ['./producteurs-list.component.css']
})
export class ProducteursListComponent implements OnInit {

  constructor(private producteurservice: ProducteursService, private sidenavService: SidenavService, private locationService: LocationService) {
    sidenavService.producteursCardColsed$.subscribe(
      opened => {
        this.opened = opened
      });
  }
  opened: boolean = false
  producteurs: Producteur[] = [];
  name: string = ''

  getProducteur(producteur: Producteur) {
    this.producteurservice.emitProducteur(producteur);
  }


  getProducteursByName(event: KeyboardEvent) {
    this.name = (<HTMLInputElement>event.target).value
    this.name === '' ? this.ngOnInit() :
      this.producteurs = this.producteurservice.getProducteursByName(this.name);
      
    this.locationService.chargeProducteursGps(this.producteurs)
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
