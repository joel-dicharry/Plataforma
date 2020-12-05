import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Passage } from '../passage-list/Passage';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  //@Input para aclarar que Passaje será un parametro de entrada desde el componente passaje-list
  @Input()
  // declaro una variable de tipo Passage que importe en la linea 2, para poder usar en el template
  // passage: Passage; // estas 2 lineas son una misma sentencia
  quantity: number;

  @Input()
  limit: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  downQuantity(): void {
    if (this.quantity > 0){
      this.quantity --;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void {
    if (this.quantity < this.limit){
      this.quantity ++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit(true);
    }
  }

  changeQuantity(event) {
    if(!(event.key >= 0 || event.key <= 9)){
      this.quantity = 0;
    }
    if(this.quantity > this.limit){
      this.maxReached.emit(true);
      this.quantity = this.limit;
    }
    this.quantityChange.emit(this.quantity);
  }

}
