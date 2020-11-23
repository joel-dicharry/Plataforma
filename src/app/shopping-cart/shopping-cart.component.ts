import { Component, OnInit } from '@angular/core';
import { Cart } from './Cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  carts: Cart[] = [
    {
      cantidad : 0,
      lugar : 'lorem ipsum',
      empresa : 'dolor sit amet',
      unidad : 0,
      total : 0,
    },
    {
      cantidad : 0,
      lugar : 'lorem ipsum',
      empresa : 'dolor sit amet',
      unidad : 0,
      total : 0,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
