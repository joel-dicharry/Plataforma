import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cart = {
    cantidad : 0,
    lugar : 'lorem ipsum',
    empresa : 'dolor sit amet',
    unidad : 0,
    total : 0,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
