import { Component, OnInit, ViewChild } from '@angular/core';
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
  selectedProducteur: Producteur = new Producteur
  name: string = ''

  @ViewChild('myList') list: any

  firstProducteur: number = 0

  scrollProducteurs() {
    var scrollTop = this.list.nativeElement.scrollTop;
    var cardScrollHeight = this.list.nativeElement.firstElementChild.firstElementChild.scrollHeight;
    this.firstProducteur = Math.floor(scrollTop / cardScrollHeight)
   

    this.producteurs = this.producteurservice.getProducteurs(this.firstProducteur, this.name)
    
    this.locationService.chargeProducteursGps(this.producteurs)
  }

  sendProducteur(producteur: Producteur) {
    this.producteurservice.emitProducteur(producteur);
  }

  getProducteursByName(event: KeyboardEvent) {
    this.name = (<HTMLInputElement>event.target).value
    this.list.nativeElement.scrollTop = 0
    this.producteurs = this.producteurservice.getProducteurs(this.firstProducteur, this.name)
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
    this.producteurs = this.producteurservice.getProducteurs(this.firstProducteur, this.name)
    this.locationService.chargeProducteursGps(this.producteurs)
  }
}
