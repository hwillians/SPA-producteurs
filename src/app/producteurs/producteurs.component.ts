import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { icon, LatLngExpression, layerGroup, Map, marker } from 'leaflet';
import { producteurs } from '../data/Producteurs';
import { Producteur } from '../models/producteur';
import { LocationService } from '../services/location.service';
import { SidenavService } from '../services/sidenav.service';


@Component({
  selector: 'app-producteurs',
  templateUrl: './producteurs.component.html',
  styleUrls: ['./producteurs.component.css']
})
export class ProducteursComponent implements OnInit {

  constructor(private locationService: LocationService, private sidenavService: SidenavService, private http: HttpClient) {
  
  }
  
  triedProducteurs: Producteur[] = producteurs;

  myfrugalmap!: Map

  close() {
    this.sidenavService.emitChange(false);
  }

  opensidenav() {
    this.sidenavService.emitChange(true);
  }

  ngOnInit(): void {
    // this.locationService.getPosition().then(pos => {
    //   console.log(`Positon: ${pos.lng} ${pos.lat}`);
    // });

    const myIcon = icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });
    let cities = layerGroup([]);

    this.sidenavService.changeEmitted$.subscribe(
      producteurs => {
        this.triedProducteurs = producteurs
      });

    this.triedProducteurs.forEach(prod => {
      cities.addLayer(marker(prod.GPSLocation, { icon: myIcon }).bindPopup(prod.Lastname))
    })

    let center: LatLngExpression = [43.638456629446516, 3.7872988526675115]

    this.myfrugalmap = this.locationService.getMap(cities, center)
  }


}
