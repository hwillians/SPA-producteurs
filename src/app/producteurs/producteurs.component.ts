import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { LocationService } from '../services/location.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producteurs',
  templateUrl: './producteurs.component.html',
  styleUrls: ['./producteurs.component.css']
})
export class ProducteursComponent implements OnInit {

  constructor(private locationService: LocationService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.locationService.getPosition().then(pos => {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });

    const mapbox = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
    const _tileSize = 512
    const _zoomOffset = -1
    const _accessToken = 'pk.eyJ1IjoiaGVsdmludyIsImEiOiJja3IxdHhjNHkwYXp5Mm9wdGMwZndrOG44In0.okBVhmigL6O_tSunN4Y8dg'

    var streets = L.tileLayer(mapbox,
      {
        id: 'mapbox/streets-v11',
        tileSize: _tileSize, zoomOffset: _zoomOffset, accessToken: _accessToken,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      }),
      outdoors = L.tileLayer(mapbox, {
        id: 'mapbox/outdoors-v11',
        tileSize: _tileSize, zoomOffset: _zoomOffset, accessToken: _accessToken,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      }),
      satellite = L.tileLayer(mapbox, {
        id: 'mapbox/satellite-v9', tileSize: _tileSize, zoomOffset: _zoomOffset, accessToken: _accessToken,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      }),
      satellite_streets = L.tileLayer(mapbox, {
        id: 'mapbox/satellite-streets-v11',
        tileSize: _tileSize, zoomOffset: _zoomOffset, accessToken: _accessToken,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      });

      const myIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });
      var cities = L.layerGroup([
        L.marker([39.61, -105.02], { icon: myIcon }).bindPopup('This is Littleton, CO.').openPopup(),
        L.marker([39.74, -104.99], { icon: myIcon }).bindPopup('This is Denver, CO.').openPopup(),
        L.marker([39.73, -104.8], { icon: myIcon }).bindPopup('This is Aurora, CO.').openPopup(),
        L.marker([39.77, -105.23], { icon: myIcon }).bindPopup('This is Golden, CO.').openPopup()
      ]);

    const myfrugalmap = L.map('producteursMap', {
      center: [39.73, -104.99],
      zoom: 10,
      layers: [streets, cities]
    })

    var baseMaps = {
      "Streets": streets,
      'Outdoors': outdoors,
      'Satellite': satellite,
      'Satellite Streets': satellite_streets
    };

    var overlayMaps = {
      "Cities": cities
    };

    L.control.layers(baseMaps, overlayMaps).addTo(myfrugalmap);

    // L.marker([50.6311634, 3.0599573], {icon: myIcon}).bindPopup('Je suis un Frugal Marqueur').addTo(myfrugalmap).openPopup();
    // this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
    //   data.records.forEach((podotactile: { geometry: { coordinates: number[]; }; }) => {
    //     L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], { icon: myIcon }).addTo(myfrugalmap);
    //   });
    // });
  }

}
