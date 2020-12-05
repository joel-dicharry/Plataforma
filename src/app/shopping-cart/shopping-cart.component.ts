import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { PassageCartService } from '../passage-cart.service';
import { Passage } from '../passage-list/Passage';
import { Cart } from './Cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  cardList$: Observable<Passage[]>;

  constructor(private p: PassageCartService) {
    this.cardList$ = p.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
