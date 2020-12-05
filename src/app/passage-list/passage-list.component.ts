import { Component, OnInit } from '@angular/core';
import { PassageCartService } from '../passage-cart.service';
import { Passage } from "./Passage";

@Component({
  selector: 'app-passage-list',
  templateUrl: './passage-list.component.html',
  styleUrls: ['./passage-list.component.scss']
})
export class PassageListComponent implements OnInit {

  passages: Passage[] = [
    {
      company: "El Rápido",
      origin: "Bolívar",
      destination: "Tandil",
      date: "7 may",
      time: "9:15 - 13:05",
      available: 16,
      quantity: 0,
    },
    {
      company: "Chevallier",
      origin: "Bolívar",
      destination: "Buenos Aires",
      date: "7 may",
      time: "9:00 - 14:00",
      available: 0,
      quantity: 0,
    },
    {
      company: "Pullman",
      origin: "Bahia Blanca",
      destination: "Bolívar",
      date: "20 oct",
      time: "3:00 - 7:55",
      available: 27,
      quantity: 0,
    },
  ];

  constructor(
    private cart: PassageCartService,
    ) { }

  ngOnInit(): void {
  }

  maxReached(b: boolean) {
    alert("Se alcanzó, o superó, la cantidad máxima de pasajes.");
  }

  addToCart(p: Passage) {
    this.cart.addToCart(p);
    p.available -= p.quantity;
    p.quantity = 0;
  }
}
