import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Passage } from './passage-list/Passage';

@Injectable({
  providedIn: 'root'
})
export class PassageCartService {

  private _cardList: Passage[] = [];

  cartList: BehaviorSubject<Passage[]> = new BehaviorSubject([]);
  
  constructor() { }

  addToCart(p: Passage){
    let item = this._cardList.find((v1) => v1.company == p.company);
    if (!item) {
      this._cardList.push({... p});
    }else{
      item.quantity += p.quantity;
    }
    console.log(this._cardList);
    this.cartList.next(this._cardList);
  }
}
