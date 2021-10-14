import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  markerOptions: google.maps.MarkerOptions;
  center: any;
  position: any;
  label: string;
  circleOptions: { fillColor: string; };
  circleOptions2: { fillColor: string; };
  circleOptions3: { fillColor: string; };
  markerOptions2: { icon: google.maps.Icon; };
  markerOptions3: { icon: google.maps.Icon; };
  position2: { lat: number; lng: number; };
  position3: { lat: number; lng: number; };
  vertices: google.maps.LatLngLiteral[];
  vertices2: google.maps.LatLngLiteral[] = [];
  constructor() {
    this.center = { lat: 45.506738, lng: 9.190766 };
    this.position = this.center;
    this.position2 = { lat: 45.507338, lng: 9.190766 };
    this.position3 = { lat: 45.506038, lng: 9.190766 };
    this.label = "ciao";
    this.circleOptions = { fillColor: 'red' }
    this.circleOptions2 = { fillColor: 'blue' }
    this.circleOptions3 = { fillColor: 'green' }

    let iconData: google.maps.Icon = {
      url: './assets/img/cat_acrobat.ico',
      scaledSize: new google.maps.Size(60, 60)
    }

    this.markerOptions = { icon: iconData }

    let iconData2: google.maps.Icon = {
      url: './assets/img/Iconka-Cat-Secrets-Cat-mask.ico',
      scaledSize: new google.maps.Size(60, 60)
    }

    this.markerOptions2 = { icon: iconData2 }


    let iconData3: google.maps.Icon = {
      url: './assets/img/Iconka-Meow-2-Cat-sleep.ico',
      scaledSize: new google.maps.Size(60, 60)
    }

    this.markerOptions3 = { icon: iconData3 }

    this.vertices = [
      { lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      { lat: this.center.lat, lng: this.center.lng },
      { lat: this.center.lat - 0.001, lng: this.center.lng - 0.002 }
    ];

    this.vertices2 = [
      { lat: 45.507338, lng: 9.190766 },
      { lat: 45.507338, lng: 9.191966 },
      { lat: 45.506038, lng: 9.191966 },
      { lat: 45.506038, lng: 9.190766 }
    ];



  }
  red() {
    this.circleOptions = { fillColor: 'red' }
  }

  green() {
    this.circleOptions = { fillColor: 'green' }
  }
  yellow() {
    this.circleOptions = { fillColor: 'yellow' }
  }

  blue() {
    this.circleOptions3 = { fillColor: 'blue' }
  }

  grey() {
    this.circleOptions3 = { fillColor: 'grey' }
  }
  purple() {
    this.circleOptions3 = { fillColor: 'purple' }
  }
}