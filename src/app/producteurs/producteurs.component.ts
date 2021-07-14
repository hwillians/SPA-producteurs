import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from '../services/location.service';
import { HttpClient } from '@angular/common/http';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-producteurs',
  templateUrl: './producteurs.component.html',
  styleUrls: ['./producteurs.component.css']
})
export class ProducteursComponent implements OnInit {

  constructor(private locationService: LocationService, private sidenavService : SidenavService,private http: HttpClient) {

  }

  myfrugalmap!: L.Map

  close() {
    this.sidenavService.emitChange(false);
  }

  opensidenav(){
    this.sidenavService.emitChange(true);
  }

  ngOnInit(): void {
    // this.locationService.getPosition().then(pos => {
    //   console.log(`Positon: ${pos.lng} ${pos.lat}`);
    // });

    const myIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
    });

    let cities = L.layerGroup([
      L.marker([39.61, -105.02], { icon: myIcon }).bindPopup('This is Littleton, CO.'),
      L.marker([39.74, -104.99], { icon: myIcon }).bindPopup('This is Denver, CO.'),
      L.marker([39.73, -104.8], { icon: myIcon }).bindPopup('This is Aurora, CO.'),
      L.marker([39.77, -105.23], { icon: myIcon }).bindPopup('This is Golden, CO.')
    ]);

    let center: L.LatLngExpression = [39.73, -104.99]

    this.myfrugalmap = this.locationService.getMap(cities, center)
  }


}
