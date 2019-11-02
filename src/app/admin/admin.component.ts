import { Component, OnInit } from '@angular/core';
import { PelisService } from '../pelis.service';
import { Ordenes } from 'src/app/models/ordenes';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  ordenes: Ordenes[];

  constructor(private ser: PelisService) { }

  ngOnInit() {
    this.ser.getItems().subscribe(items => {
      console.log(items);
      this.ordenes = items;
    } )
  }

  funcion() {

  }

}
