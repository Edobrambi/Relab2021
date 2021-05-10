import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../models/hotel.model';
@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  @Input() listaHotels : Hotel[];
  constructor() { }

  ngOnInit(): void {
  }

}
