import { Component, OnInit } from '@angular/core';
import { PelisService } from 'src/app/pelis.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  name;
  lname;
  email;
  phone;
  quantity;
  movie;

  constructor( private ser: PelisService) {

   }

  funcion() {
    this.name = (document.getElementById('name') as HTMLInputElement).value;

    this.lname = (document.getElementById('lastname') as HTMLInputElement).value;

    this.email = (document.getElementById('email') as HTMLInputElement).value;

    this.phone = (document.getElementById('phone') as HTMLInputElement).value;

    this.quantity = (document.getElementById('quantity') as HTMLInputElement).value;

    this.movie = (document.getElementById('sel') as HTMLSelectElement).value;

    const orden = {
      name: this.name,
      lname: this.lname,
      email: this.email,
      phone: this.phone,
      quantity: this.quantity,
      movie: this.movie
    };

    console.log(orden);

    this.ser.orden(orden);
  }



  ngOnInit() {
  }


}
