import { Component, OnInit } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Hotel } from './models/hotel.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  obsHotel: Observable <Hotel[]>;
  listaHotels: Hotel[];
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.obsHotel = this.http.get<Hotel[]>('https://my-json-server.typicode.com/malizia-g/hotel/short-booking');
    this.obsHotel.subscribe(this.getHotels);
 
  }

  getHotels = (data: Hotel[]) =>{
    this.listaHotels = data;
    
    console.log(this.listaHotels);
  }
}