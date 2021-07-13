import { Injectable } from '@angular/core';
import { LayerGroup, LatLngTuple } from 'leaflet';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  getMap(cities: LayerGroup<any>, center: LatLngTuple) {

    let myMap

    const MAPBOX = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
      TILESIZE = 512,
      ZOOM = -1,
      TOKEN = 'pk.eyJ1IjoiaGVsdmludyIsImEiOiJja3IxdHhjNHkwYXp5Mm9wdGMwZndrOG44In0.okBVhmigL6O_tSunN4Y8dg'

    var streets = L.tileLayer(MAPBOX,
      {
        id: 'mapbox/streets-v11',
        tileSize: TILESIZE, zoomOffset: ZOOM, accessToken: TOKEN,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      }),
      outdoors = L.tileLayer(MAPBOX, {
        id: 'mapbox/outdoors-v11',
        tileSize: TILESIZE, zoomOffset: ZOOM, accessToken: TOKEN,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      }),
      satellite = L.tileLayer(MAPBOX, {
        id: 'mapbox/satellite-v9', tileSize: TILESIZE, zoomOffset: ZOOM, accessToken: TOKEN,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      }),
      satellite_streets = L.tileLayer(MAPBOX, {
        id: 'mapbox/satellite-streets-v11',
        tileSize: TILESIZE, zoomOffset: ZOOM, accessToken: TOKEN,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      });

    myMap = L.map('producteursMap', {
      center: center,
      zoom: 10,
      layers: [streets, cities],
    });

    var baseMaps = {
      "Streets": streets,
      'Outdoors': outdoors,
      'Satellite': satellite,
      'Satellite Streets': satellite_streets
    };

    var overlayMaps = {
      "Cities": cities
    };

    L.control.layers(baseMaps, overlayMaps).addTo(myMap);

    return myMap

    // L.marker([50.6311634, 3.0599573], {icon: myIcon}).bindPopup('Je suis un Frugal Marqueur').addTo(myfrugalmap).openPopup();
    // this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
    //   data.records.forEach((podotactile: { geometry: { coordinates: number[]; }; }) => {
    //     L.marker([podotactile.geometry.coordinates[1], podotactile.geometry.coordinates[0]], { icon: myIcon }).addTo(myfrugalmap);
    //   });
    // });

  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });

  }
}
